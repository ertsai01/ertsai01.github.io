import React from 'react';
import { images, icons } from '../../assets/constants';
import './style.css';
import Fade from 'react-reveal/Fade';
import NavBar from '../../components/NavBar';

class About extends React.Component {

    componentWillMount() {
        window.scrollTo({top: 0, behavior: 'instant'});
    }

    render() {
        return (
            <>
            <NavBar />
            <div className='about-content'>
                <Fade>
                <div id='about-card'>
                    <div id='about-description'>
                        <h1>hey! let's <div id='create'>create</div> ✨</h1>
                        <p>
                            I'm always striving to stay curious and inspired, and 
                            am always looking for opportunities to fill my toolkit.
                            Message me if you if you want to talk about tech, music, or 
                            anything in between!
                        </p>
                        <div id='icon-row'>
                            <a href='mailto:ertsai01@berkeley.edu' target='_blank' rel="noreferrer">
                                <img src={icons.email} alt='email' />
                            </a>
                            <a href='https://www.facebook.com/erintsaii' target='_blank' rel="noreferrer">
                                <img src={icons.facebook} alt='facebook' />  
                            </a>
                            <a href='https://www.linkedin.com/in/erin-tsai-9b5a28167/' target='_blank' rel="noreferrer">
                                <img src={icons.linkedin} alt='linkedin' />
                            </a>
                        </div>
                    </div>
                    <img src={images.me3} alt='Erin' id='me' />
                </div>
                
                </Fade>

                <Fade>
                    <div id='about-text'>
                        <p>
                            Since I was little, I loved to create. From video-editing and drawing to music and dance,
                            I used any medium I could get my hands on to push the boundaries of my imagination and convey the beauty in the world around me.
                            In college, I developed an interest in psychology, web development, and design, and can't wait to see where my journey will take me!
                        </p>
    
                        <p>
                            Music is one of my greatest passions, and I’ve dreamt about composing my own music for as long as I can remember. 
                            While I'm still expanding my skills, playing and learning more about music is one of my favorite pasttimes! 
                        </p>
    
                        <p>
                            When I'm not on my laptop or keyboard, I love dancing, doodling, and 
                            scouting out new cafes.
                        </p>
                    </div>
                </Fade>
            </div>
            </>
        )
    }
}

export default About;
