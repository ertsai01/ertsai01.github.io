import React, { useState } from 'react';
import ProjectCard from '../../components/ProjectCard/index';
import Header from '../../components/Header/index';
import { thumbnails, images, faqSlides, motivatedSlides, productivitySlides } from '../../assets/constants';

function Projects() {
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
        productivity: () => toggleModal('productivity'),
        zen: () => navigate('https://www.figma.com/file/w8o8WeutfocpzZJUqEaDvb/find-your-zen?node-id=0%3A1'),
        wdd: () => navigate('https:ertsai01.github.io/final'),
        ice: () => navigate('https://youtu.be/B93ikt1JyTI')
    }

    return (
        <div className='container'>
            <Header text='projects' />
            <div className='projects fade-in'>
                <ProjectCard thumbnail={thumbnails['study']} text='studywith.me' subtext='UI/UX design, human-centered design, case study'
                    action={actions['study']} />
                
                <ProjectCard thumbnail={thumbnails['zen']} title='Find Your Zen' text='Find Your Zen' subtext='UI design, iOS development' action={actions.zen} />

                <ProjectCard thumbnail={thumbnails['wdd']} text='2020 Time Capsule' subtext='UI design, web development'
                    title='2020 time capsule' action={actions.wdd} />
                
                <ProjectCard thumbnail={thumbnails['motivate']} type={'slide'} text="A Student's Guide to Staying Motivated" subtext='social media graphics' 
                    slides={motivatedSlides} size={7} action={actions['motivate']} show={showModal['motivate']} />
                
                <ProjectCard thumbnail={thumbnails['hand']} text='out of grasp' subtext='vector illustration'
                    type={'img'} img={images['handImg']} show={showModal['hand']} action={actions['hand']} />
                
                <ProjectCard thumbnail={thumbnails['raccoon']} type={'img'} text='rakoon' subtext='vector illustration' img={images['raccoonImg']}
                    show={showModal['raccoon']} action={actions['raccoon']} />
                
                <ProjectCard thumbnail={thumbnails['faq']} type={'slide'} text='FPF FAQs' subtext='social media graphics' slides={faqSlides}
                    size={6} action={actions['faq']} show={showModal['faq']} />
                
                <ProjectCard thumbnail={thumbnails['productivity']} type={'slide'} text='Maximizing Productivity During Quarantine' subtext='social media graphics'
                    slides={productivitySlides} size={6} action={actions['productivity']} show={showModal['productivity']} />
        
            </div>
            <p className='center'>• • •</p>
        </div>
    )
}

export default Projects;
