import React, { useState } from 'react';
import './style.css';
import Fade from 'react-reveal/Fade';
import ImageModal from '../modals/ImageModal/index';

function Illustrations(props) {
    const [show, setShow] = useState(false);
    const { thumbnail, image, alt } = props;

    return (
        <Fade>
            <div className='project'>
                <div>
                    <img src={thumbnail} onClick={() => setShow(true)}  className='illustration-thumbnail' alt={alt} />
                    <ImageModal show={show} handleClose={() => setShow(false)} img={image} />
                </div>
            </div>
        </Fade>
    )
}


export default Illustrations;
