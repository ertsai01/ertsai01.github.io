import React, { useState } from 'react';
import ProjectCard from '../../components/ProjectCard/index';
import { thumbnails, images, faqSlides, motivatedSlides, productivitySlides } from '../../assets/constants';

function Design() {
    const [showHand, setHand] = useState(false);
    const [showRaccoon, setRaccoon] = useState(false);
    const [showMotivate, setMotivate] = useState(false);
    const [showFaq, setFaq] = useState(false);
    const [showProductivity, setProductivity] = useState(false);

    const showModal = { hand: showHand, raccoon: showRaccoon, motivate: showMotivate, faq: showFaq, productivity: showProductivity };
    const setModal = {hand: setHand, raccoon: setRaccoon, motivate: setMotivate, faq: setFaq, productivity: setProductivity };
    
    const toggleModal = (img) => setModal[img](!showModal[img]);
    const navigate = (url) => window.open(url, '_blank'); 
    const actions = {
        study: () => navigate('https://www.behance.net/gallery/118174559/studywithme'),
        motivate: () => toggleModal('motivate'),
        hand: () => toggleModal('hand'),
        faq: () => toggleModal('faq'),
        raccoon: () => toggleModal('raccoon'),
        productivity: () => toggleModal('productivity')
    }

    return (
            <div className='container' id='design'>
                <div className='header'>
                    <h1>design</h1>
                    <hr className='line' />
                </div>
                <div className='projcontainer fade-in'>
                    <ProjectCard thumbnail={thumbnails['study']} type={'external'}
                                text='A web-based homework party platform for classes.'
                                subtext={['UI/UX design, human-centered design, case study', 'Tools: Figma, Behance']}
                                action={actions['study']} overlay={true} />
                    
                    <ProjectCard thumbnail={thumbnails['motivate']} type={'slide'}
                                text="A social media post for UC Berkeley's Fall Program for Freshmen."
                                subtext={['Graphic design, social media', 'Tools: Figma']} slides={motivatedSlides}
                                size={7} action={actions['motivate']} show={showModal['motivate']} overlay={true} />
                    
                    <ProjectCard thumbnail={thumbnails['hand']} subtext={['Graphic art', 'Tools: Adobe Illustrator']}
                                type={'img'} img={images['handImg']} show={showModal['hand']} action={actions['hand']} overlay={true} />
                    
                    <ProjectCard thumbnail={thumbnails['faq']} type={'slide'}
                                text="FAQ post for UC Berkeley's Fall Program for Freshmen."
                                subtext={['Graphic design, social media', 'Tools: Adobe XD']} slides={faqSlides}
                                size={6} action={actions['faq']} show={showModal['faq']} overlay={true} />
                    
                    <ProjectCard thumbnail={thumbnails['raccoon']} type={'img'}
                                text='These koi fish look weird.'
                                subtext={['Graphic art', 'Tools: Adobe Illustrator']} img={images['raccoonImg']}
                                show={showModal['raccoon']} action={actions['raccoon']} overlay={true} />
                  
                  <ProjectCard thumbnail={thumbnails['productivity']} type={'slide'}
                                text="Productivity tips for UC Berkeley's Fall Program for Freshmen."
                                subtext={['Graphic design, social media', 'Tools: Adobe XD']} slides={productivitySlides}
                                size={6} action={actions['productivity']} show={showModal['productivity']} overlay={true} />
                </div>
            </div>
    )
}

export default Design;
