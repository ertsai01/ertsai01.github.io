import React, { useState } from 'react';
import './style.css';
import Fade from 'react-reveal/Fade';
import VideoModal from '../modals/VideoModal/index';

function Pieces(props) {
    const [show, setShow] = useState(false);
    const { image, sheetMusic, video, alt } = props.piece;
    const title = props.title;

    return (
        <Fade>
            <div className='project'>
                <div className='project-thumbnail'>
                    <img src={image} onClick={() => setShow(true)} alt={alt} />
                    <VideoModal show={show} handleClose={() => setShow(false)} url={video} />
                </div>
                <div className='music-text'>
                    <h4>{title}</h4>
                    <a className='subtext strike' href={sheetMusic} target='_blank' rel="noreferrer">sheet music</a>
                </div>
                <div className='role-bar'></div>
            </div>
        </Fade>
    )
}


export default Pieces;
