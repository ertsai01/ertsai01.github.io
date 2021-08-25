import React, { useState } from 'react';
import ProjectCard from '../../components/ProjectCard/index.js';
import Header from '../../components/Header/index';
import { thumbnails, videos, pdfs, audio } from '../../assets/constants';

function Music() {
    const [showSky, setSky] = useState(false);
    const [showLuhua, setLuhua] = useState(false);
    const [showChuanqi, setChuanqi] = useState(false);

    const showModal = { sky: showSky, luhua: showLuhua, chuanqi: showChuanqi };
    const setModal = { sky: setSky, luhua: setLuhua, chuanqi: setChuanqi };
    
    const toggleModal = (img) => setModal[img](!showModal[img]);

    const actions = {
        sky: () => toggleModal('sky'),
        luhua: () => toggleModal('luhua'),
        chuanqi: () => toggleModal('chuanqi')
    }

    return (
        <div class='container'>
            <Header text='music' />
            <div class='projects fade-in'>
                <ProjectCard thumbnail={thumbnails.chuanqi} text='chuan qi' type='video'
                            url={videos.chuanqiVid} action={actions['chuanqi']} show={showModal['chuanqi']}
                            link={{url: pdfs.chuanqiPdf, label: 'sheet music'}} />
                <ProjectCard thumbnail={thumbnails.sky} text="candy skies" type='video'
                            url={videos.candyskiesVid} action={actions['sky']} show={showModal['sky']}
                            link={{url: pdfs.candySkiesPdf, label: 'sheet music'}} />
                <ProjectCard thumbnail={thumbnails.luhua} text="luhua" type='video'
                            url={videos.luhuaVid} action={actions['luhua']} show={showModal['luhua']}
                            link={{url: pdfs.luhuaPdf, label: 'sheet music'}} />
            </div>
            <p className='center'>• • •</p>
        </div>
    )
}

export default Music;
