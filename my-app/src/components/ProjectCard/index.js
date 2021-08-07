import Card from 'react-bootstrap/Card';
import ImageModal from '../ImageModal/index';
import CarouselModal from '../CarouselModal/index'
import VideoModal from '../VideoModal/index';
import { useState } from 'react';
import './style.css';

function ProjectCard(props) {
  const [showOverlay, setOverlay] = useState(false);
  const toggleOverlay = () => setOverlay(!showOverlay);
  const { subtext, overlay, action, title, text, type, show, img, size, url, slides, links, thumbnail } = props;

  const createLinks = () => {
    let lst = [];
      links.forEach(link => {
        lst.push(<a href={link.url} target="_blank" rel="noreferrer" className='link'><span class='strike overlaytext'>{link.label}</span></a>)})
      return lst;
  }

  const createSubtext = () => {
    let texts = [];
    if (subtext !== undefined) {
      subtext.forEach(text => {
        texts.push(<Card.Text className='subtext'>{text}</Card.Text>);
      });
    }
    return texts;
  }
  
  const hover = (overlay) ? toggleOverlay : null;

    return (
      <Card style={{ width: '14rem' }}>
        <Card.Img variant="top" onClick={action} onMouseEnter={hover} src={thumbnail} className='thumbnail' alt={title} />
        {showOverlay ? <div className='overlay' onMouseLeave={hover} onClick={action}>
          <div className='overlay-text'>
            <Card.Text>{text}</Card.Text>
            {createSubtext()}
            {(links != null) ? createLinks() : <a href={action} target="_blank" rel="noreferrer" className='link'><span class='strike overlaytext'>view</span></a>}
          </div>
        </div> : <></>}
        {type === 'img' ? <ImageModal show={show} handleClose={action} img={img} /> : <></>}
        {type === 'slide' ? <CarouselModal show={show} handleClose={action} size={size} slides={slides} /> : <></>}
        {type === 'video' ? <VideoModal show={show} handleClose={action} url={url} /> : <></>}
        {!overlay ? 
            <Card.Body>
              <Card.Title>{title}</Card.Title>
              {(links != null) ? createLinks() : <></>}
            </Card.Body> : <></>
        }
    </Card>
  );
}

export default ProjectCard;
