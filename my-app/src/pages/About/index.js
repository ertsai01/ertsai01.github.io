import React from 'react';
import './style.css';

function About() {
    return (
        <div className='container'>
			<div className='header'>
				<h1>about</h1>
				<hr className='line' />
			</div>
			<div className='about container fade-in'>
				<p>Hello! My name is Erin, and I'm a second-year student at UC Berkeley studying Cognitive Science and Computer Science.
					During my time at Cal, I've joined the social media team for UC Berkeley's Fall Program for Freshmen, as well as logistic and curriculum committees for CS Kickstart. I've also become involved in Codeology and AFX, an urban dance team.
					Through my courses, I've grown to love studying the human mind, learning how to program personal projects (like this one!), and studying the intersection humans and technology.</p>
				<p>I'm passionate about interdisciplinary education, and love drawing from different experiences and areas of knowledge.
					I have an extensive bucket list of things to learn, including full-stack development, UI/UX design, music composition, dance, art, and so much more.
					While I'm still scratching at the surface for some of these subjects, I hope this website will grow to include everything I'll learn and accomplish in the future!</p>
				<p>Aside from everything I've yet to achieve, I really enjoy watching reality/throwback TV,
					making impromptu music covers, and devouring hot Cheetos. In fact, I could really use a bag right now.</p>
            </div>
        </div>
    )
}

export default About;
