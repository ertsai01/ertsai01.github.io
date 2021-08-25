import Card from 'react-bootstrap/Card';
import ImageModal from '../modals/ImageModal/index';
import CarouselModal from '../modals/CarouselModal/index'
import VideoModal from '../modals/VideoModal/index';
import Strikethrough from '../Strikethrough/index';
import './style.css';

function ProjectCard(props) {
  const { type, text, subtext, action, show, img, size, url, slides, link, thumbnail } = props;

    return (
      <div className='container'>
        <Card style={{ width: '14rem' }}>
          <Card.Img variant="top" onClick={action} src={thumbnail} className='thumbnail' alt='text' />
          {type === 'img' && <ImageModal show={show} handleClose={action} img={img} />}
          {type === 'slide' && <CarouselModal show={show} handleClose={action} size={size} slides={slides} />}
          {type === 'video' && <VideoModal show={show} handleClose={action} url={url} />}
        </Card>
        <div className='card-text'>
          <p className='title'>{text}</p>
          <p className='subtext'>{subtext}</p>
          {link && <p className='subtext'>
            {<a href={link.url} target="_blank" rel="noreferrer" className='link'><Strikethrough text={link.label} /></a>}
            </p> }
        </div>
      </div> 
  );
}

export default ProjectCard;
