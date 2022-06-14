import React from 'react';

import { thumbnails, videos, pdfs } from '../../assets/constants';
import Pieces from '../../components/Projects/Pieces';
import Illustrations from '../../components/Projects/Illustrations';
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';
import './style.css';

class Fun extends React.Component {

    componentWillMount() {
        window.scrollTo({top: 0, behavior: 'instant'});
    }

    render() {
        const illustrations = {
            'piano': {
                thumbnail: thumbnails.pianoImg,
                image: thumbnails.pianoImg,
            },
            'hand': {
                thumbnail: thumbnails.handImg,
                image: thumbnails.handImg,
            },
            'raccoon': {
                thumbnail: thumbnails.raccoonImg,
                image: thumbnails.raccoonImg,
            },
            'mahjong': {
                thumbnail: thumbnails.mahjongImg,
                image: thumbnails.mahjongImg,
            },
            'jacob': {
                thumbnail: thumbnails.jacobImg,
                image: thumbnails.jacobImg,
            }
        }

        const getIllustrations = () => {
            return (
                <div className='projects-wrapper'>
                    <div className='projects-container'>
                        {
                            Object.keys(illustrations).map(illustration => {
                            const piece = illustrations[illustration];
                            return (
                                <Illustrations thumbnail={piece.thumbnail} image={piece.image} />
                            )}) 
                        }
                    </div>
                </div>
            )
        }

        const music = {
            'candy skies': {
                image: thumbnails.sky,
                sheetMusic: pdfs.candySkiesPdf,
                video: videos.candyskiesVid
            },
            'luhua': {
                image: thumbnails.luhua,
                sheetMusic: pdfs.luhuaPdf,
                video: videos.luhuaVid
            },
            'chuanqi': {
                image: thumbnails.chuanqi,
                sheetMusic: pdfs.chuanqiPdf,
                video: videos.chuanqiVid
            }
        }

        const getMusic = () => {
            return (
                <div className='projects-wrapper'>
                    <div className='projects-container'>
                        {
                            Object.keys(music).map(title => {
                                const piece = music[title];
                            return (
                                <Pieces piece={piece} title={title} />
                            )
                            }) 
                        }
                    </div>
                </div>
                
            )
        }

        return (
            <>
            <NavBar />
            <div id='experience-content'>
            <div className='experience-section'>
                    <h1>tunes</h1>
                    {getMusic()}
                </div>
                <div className='experience-section'>
                    <h1>doodles</h1>
                    {getIllustrations()}
                </div>
            </div>
            <Footer />
            </>
        )
    }
}

export default Fun;
