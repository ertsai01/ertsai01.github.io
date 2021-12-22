import './style.css';
import Display from './Display/index';
import Title from './Title/index';
import { musicThumbnails, projectThumbnails, pdfs } from '../../../assets/constants';

function Projects() {

    const projects = {
        0: {
            thumbnail: projectThumbnails.study,
            rightText: 'studywith.me',
            leftText: 'HCD case study',
            link: 'https://www.behance.net/gallery/118174559/studywithme'
        },
        1: {
            thumbnail: projectThumbnails.wdd,
            rightText: 'quarantine time capsule',
            leftText: 'web design + development',
            link: '/final'
        },
        2: {
            thumbnail: projectThumbnails.zen,
            rightText: 'find your zen',
            leftText: 'UI design, iOS development',
        },
        3: {
            thumbnail: projectThumbnails.ice,
            rightText: 'thin ice',
            leftText: 'game development'
        }
    }

    const music = {
        0: {
            thumbnail: musicThumbnails.chuanqi,
            rightText: 'chuan qi',
            leftText: 'sheet music',
            link: pdfs.chuanqiPdf
        },
        1: {
            thumbnail: musicThumbnails.luhua,
            rightText: 'luhua',
            leftText: 'sheet music',
            link: pdfs.luhuaPdf
        },
        2: {
            thumbnail: musicThumbnails.sky,
            rightText: 'candy skies',
            leftText: 'sheet music',
            link: pdfs.candySkiesPdf
        }
    }

    return (
        <>
            <div id='projects-container'>
                <Title title='projects' page='experience' />
                <Display items={projects} />
            </div>
        
        
            <div id='projects-container'>
                <Title title='music' page='music' />
                <Display items={music} />
            </div>    
        </> 
    )
}

export default Projects;
