import React, { useState } from 'react';
import ProjectCard from '../../components/ProjectCard/index.js';
import { thumbnails, videos, pdfs } from '../../assets/constants';

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
        <div>
            <div class='container' id='music'>
                <div class='header'>
                    <h1>music</h1>
                    <hr class='line' />
                </div>
                <div class='projcontainer fade-in'>
                    <ProjectCard thumbnail={thumbnails.niming} title='chuan qi' type='video'
                                url={videos.luhuaVid} action={actions['chuanqi']} show={showModal['chuanqi']}
                                links={[{url: pdfs.chuanqiPdf, label: 'sheet music'}]} />
                    <ProjectCard thumbnail={thumbnails.sky} title="candy skies" type='video'
                                url={videos.candyskiesVid} action={actions['sky']} show={showModal['sky']}
                                links={[{url: pdfs.candySkiesPdf, label: 'sheet music'}]} />
                    <ProjectCard thumbnail={thumbnails.luhua} title="luhua" type='video'
                                url={videos.luhuaVid} action={actions['luhua']} show={showModal['luhua']}
                                links={[{url: pdfs.luhuaPdf, label: 'sheet music'}]} />
                </div>
            </div>
        </div>
    )
}

export default Music;
