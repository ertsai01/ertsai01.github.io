import React from 'react';
import ProjectCard from '../../components/ProjectCard/index.js';
import { thumbnails, videos } from '../../assets/constants';

function Programming() {
    const navigate = (url) => window.open(url, '_blank'); 
    const actions = {
        zen: () => navigate('https://www.figma.com/file/w8o8WeutfocpzZJUqEaDvb/find-your-zen?node-id=0%3A1'),
        wdd: () => navigate('https:ertsai01.github.io/final'),
        ice: () => navigate('https://youtu.be/B93ikt1JyTI')
    }

    return (

            <div class='container' id='programming'>
                <div class='header'>
                    <h1>programming</h1>
                    <hr class='line' />
                </div>
                <div class='projcontainer fade-in'>
                    <ProjectCard thumbnail={thumbnails['zen']} title='Find Your Zen'
                                text='Find Your Zen: an iOS meditation/wellness app.' subtext={['Tools: Swift, Xcode, Figma']}
                                action={actions.zen}
                                links={[{url: 'https://www.figma.com/file/w8o8WeutfocpzZJUqEaDvb/find-your-zen?node-id=0%3A1', label: 'figma'},
                                        {url: videos.appDemo, label: 'demo'}]} overlay={true} />
                    <ProjectCard thumbnail={thumbnails['wdd']} text='A spring 2020 quarantine time capsule.' subtext={['Tools: HTML, CSS, Javascript']}
                                title='2020 time capsule' action={actions.wdd} overlay={true} />
                    <ProjectCard thumbnail={thumbnails['ice']} text='Thin Ice: an explorable pseudorandom world-building game.' subtext={['Tools: Java']}
                                url='https://youtu.be/B93ikt1JyTI' title='Thin Ice' overlay={true} action={actions.ice} />
                </div>
            </div>

    )
}

export default Programming;
