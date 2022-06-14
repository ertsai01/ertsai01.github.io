import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import SpeechBubble from '../../../components/SpeechBubble/index';
import {images} from '../../../assets/constants.js';
import Fade from 'react-reveal/Fade';

class About extends React.Component {

    constructor(props) {
        super(props);
        this.state = { wordIndex: 0 }
        this.text1 = 'hey there! my name is erin 👩🏻‍💻';
        this.wordList = ['software developer', 'designer', 'musician',
        'artist', 'doodler', 'boba connoisseur'];
        this.concatWordlList = this.wordList.join(' ');

        this.typing = this.typing.bind(this);
        this.deleting = this.deleting.bind(this);
    }

    componentDidMount() {
        this.typing(this.wordList[0], 0);
    }

    componentWillUnmount() {
        return;
    }

    typing(word, i) {
        const typing = document.querySelector(".typing");
        if (typing === null) return;
        if (i < word.length) {
            typing.innerHTML = word.substring(0, i+1) +'<span aria-hidden="true"></span>';
            // wait for a while and call this function again for next character
            setTimeout(() => { this.typing(word, i + 1) }, 75);
        } else {
            setTimeout(()=> { this.deleting(word, i) }, 1000);
        }
    }

    deleting(word, i) {
        const typing = document.querySelector(".typing");
        if (typing === null) return;
        if (i >= 0) {
            typing.innerHTML = word.substring(0, i - 1) +'<span aria-hidden="true"></span>';
            // wait for a while and call this function again for next character
            setTimeout(() => { this.deleting(word, i - 1) }, 75);
        } else {
            this.setState({ wordIndex: this.state.wordIndex + 1 });
            this.typing(this.wordList[this.state.wordIndex % this.wordList.length], 0);
        }
    }

    end() {
        return;
    }

    render() {
        return (
            <div id='home-about-container'>
                <Fade bottom>
                    <div id='home-about-content'>
                        <SpeechBubble type='text' content={this.text1} />
                        <SpeechBubble type='img' content={images.me} />
                        <Link to='about'><SpeechBubble type='text' content={'about me >'} /></Link>
                    </div>
                </Fade>
                <Fade>
                    <div id='text-bar' alt={`i'm an aspiring ${this.concatWordList}`} style={{ whiteSpace: 'nowrap' }}>
                        <b>i'm an aspiring&nbsp;</b>
                        <div>
                            <b className='typing'></b>
                        </div>
                    </div>
                </Fade>
            </div>
        )

    }
    
}

export default About;
