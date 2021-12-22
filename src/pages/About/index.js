import React from 'react';
import { images } from '../../assets/constants';
import './style.css';
import NavBar from '../../components/NavBar/index';
import Footer from '../../components/Footer/index';
import Fade from 'react-reveal/Fade';

class About extends React.Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <div id='about-container'>
                <NavBar />
                <div id='about-banner-container'>
                    <div id='about-banner'>
                        <img src={images.sky_bw} alt='a black and white sky' />
                    </div>
                </div>
                
                <div className='about-content'>
                    <div id='about-card'>
                        <Fade>
                            <div id='about-intro'>
                                <div id='me'>
                                    <img src={images.me2} alt='Erin' />
                                    <h1>Erin Tsai</h1>
                                </div>
                                <div className='bullet-points'>
                                    <p>📍 Sunnyvale, CA</p>
                                    <p>🏫 UC Berkeley '23</p>
                                    <p>🍜 Noodle enthusiast</p>
                                </div>       
                            </div>
                            <div id='about-description'>
                                <h1>hey! let's create ✨</h1>
                                <p>
                                    I'm always striving to stay curious and inspired, and 
                                    am always looking for opportunities to fill my toolkit.
                                    Message me if you if you want to talk about tech, music, or 
                                    anything in between!
                                </p>
                            </div>
                        </Fade>
                    </div>
                    <Fade>
                        <div id='about-text'>
                            <p>
                                    Since I was little, I loved to create. From video-editing and drawing to music and dance,
                                    I used any medium I could get my hands on to convey my visions and the beauty in the world around me.
                                    Whether it be school projects or my own endeavors,
                                    I strove to express my individuality and push the boundaries of my imagination at every opportunity.
                                    Over time, I gained a profound interest in human interaction and psychology.
                                    I began exploring both CS and cognitive science my freshman year of college, 
                                    and have since developed an interest in UI/UX design and web development. 
                                    I am currently a software development intern at FairX, and can't wait to see where my journey will take me!
                                </p>
            
                                <p>
                                    Music is one of my greatest passions, and I’ve dreamt about composing my own music for as long as I can remember. 
                                    While I'm still expanding my skills, playing and learning more about music is one of my favorite pasttimes! 
                                </p>
            
                                <p>
                                    When I'm not on my laptop or keyboard, I love dancing, doodling, 
                                    scouting out new cafes, and watching food videos.
                                </p>
                        </div>
                        
                    </Fade>
                    <Footer />
                </div>
            </div>
        )
    }
}

export default About;
