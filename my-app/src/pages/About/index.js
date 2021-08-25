import React from 'react';
import Header from '../../components/Header/index';
import { images } from '../../assets/constants';
import './style.css';

function About() {
    function Picture(props) {
        return (
            <div className={`picture ${props.className}`}>
                <img src={props.src}/>
                <div className='offset down'></div>
                <div className='offset up'></div>
            </div>
            
        );
    }

    return (
        <div className='container'>
            <div className='about fade-in'>
                <div>
                    <Picture src={images.me} />
                    <Picture src={images.me2} />
                </div>
                <div>
                    <h1>hi there! i'm erin 👩🏻‍💻</h1>
                    <p>I'm a third year at UC Berkeley studying computer science and cognitive science.</p>
                    <p>Growing up in the Bay Area, CA, I've always had a profound interest in art, human interaction, and psychology. From school
                        projects to my own endeavors, I strove to express my individuality and push the boundaries of my own imagination. I began
                        exploring both CS and cognitive science my freshman year of college, and have since developed an interest in UI/UX design and front-end development.
                        I am currently a software development intern at FairX, and can't wait to see where my journey will take me!</p>
                    <p>Ever since I could remember, I've been an avid musician and dreamt about composing my own music. While I'm still
                        expanding my skills, playing and learning more about music is one of my favorite pasttimes! When I'm not on my laptop or keyboard,
                        I love dancing, doodling, and scouting out new cafes.
                    </p>
                    <p className='center'>• • •</p>
                </div>
            </div>
        </div> 
    )
}

export default About;
