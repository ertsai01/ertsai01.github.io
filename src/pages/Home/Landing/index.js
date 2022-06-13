import './style.css';
import { logo } from '../../../assets/constants';
import React from 'react';
import Fade from 'react-reveal/Fade';

class Landing extends React.Component {
    constructor(props) {
        super(props);
        this.updateHolographicBackground = this.updateHolographicBackground.bind(this);
        this.handleMouseMove = this.handleMouseMove.bind(this);
        this.glowOnHover = this.glowOnHover.bind(this);
        this.removeGlow = this.removeGlow.bind(this);
    }

    updateHolographicBackground(value) {
        const percentage = value * 100;
        const holographicElement = document.querySelector("#holographic");
        holographicElement.style.backgroundPosition = percentage + "%";
    }

    handleMouseMove(event) {
        const y = event.clientY;
        const height = document.documentElement.clientHeight;
        const value = y / height;
        this.updateHolographicBackground(value);
    }

    glowOnHover(e) {
        const item = e.target;
        item.classList.add('glow');
    }

    removeGlow(e) {
        const item = e.target;
        item.classList.remove('glow');
    }

    render() {
        return (
            <div id="holographic" onMouseMove={(e) => this.handleMouseMove(e)}>
                <Fade>
                    <div id='landing-container'>
                        <img id='logo' src={logo} alt='logo' />
                        <div id='landing-text'>
                            <h1 class='glow'>ERIN TSAI</h1>
                            <div>
                                <p>uc berkeley cs + cognitive science student.</p>
                                <p>welcome to my world!</p>
                            </div>
                        </div>
                        
                    </div>
                </Fade>
            </div>
        )
    }
}

export default Landing;
