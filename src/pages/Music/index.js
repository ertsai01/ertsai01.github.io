import React from 'react';
import Card from 'react-bootstrap/Card';
import VideoModal from '../../components/modals/VideoModal/index';
import { thumbnails, videos, pdfs } from '../../assets/constants';
import NavBar from '../../components/NavBar/index';
import Footer from '../../components/Footer/index';
import Fade from 'react-reveal/Fade';
import './style.css';

class Music extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sky: false,
            luhua: false,
            chuanqi: false
        }
        
        this.toggleModal = (img) => {
            const toggle = !this.state[img];
            this.setState({ [img]: toggle });
            this.pieces[img].showModal = toggle;
        }

        this.pieces = {
            sky: {
                thumbnail: thumbnails.sky,
                title: 'candy skies',
                sheetMusic: pdfs.candySkiesPdf,
                action: () => this.toggleModal('sky'),
                showModal: this.state.sky,
                video: videos.candyskiesVid
            },
            luhua: {
                thumbnail: thumbnails.luhua,
                title: 'luhua',
                sheetMusic: pdfs.luhuaPdf,
                action: () => this.toggleModal('luhua'),
                showModal: this.state.luhua,
                video: videos.luhuaVid
            },
            chuanqi: {
                thumbnail: thumbnails.chuanqi,
                title: 'chuan qi',
                sheetMusic: pdfs.chuanqiPdf,
                action: () => this.toggleModal('chuanqi'),
                showModal: this.state.chuanqi,
                video: videos.chuanqiVid
            }
        }
    }

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <div id='music-container'>
                <NavBar />
                <div id='music-content'>
                    <h1>music</h1>
                    <div className='projects'>
                        {Object.values(this.pieces).map(piece => {
                            const [thumbnail, title, sheetMusic, action, showModal, video] = Object.values(piece);
                            return (
                                <Fade>
                                    <div>
                                    <Card style={{ width: '14rem' }}>
                                        <Card.Img variant="top" onClick={action} src={thumbnail} className='thumbnail' alt='text' />
                                        <VideoModal show={showModal} handleClose={action} url={video} />
                                    </Card>
                                    <div className='card-text'>
                                        <p className='title'>{title}</p>
                                        <a className='subtext strike' href={sheetMusic} target='_blank' rel="noreferrer">sheet music</a>
                                    </div>
                                    </div>
                                </Fade>  
                            )
                        })}
                        </div>
                    </div>
                <Footer />
            </div>
        )

    }
}

export default Music;
