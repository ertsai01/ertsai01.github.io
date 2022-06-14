import './style.css';
import Display from './Display/index';
import Title from './Title/index';
import { musicThumbnails, projectThumbnails, pdfs } from '../../../assets/constants';

function Projects() {

    const experience = {
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
            link: 'https://localhost:3000/final/index.html'
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

    const art = {
        0: {
            thumbnail: musicThumbnails.chuanqi,
            rightText: 'chuan qi',
            leftText: '',
            link: pdfs.chuanqiPdf
        },
        1: {
            thumbnail: musicThumbnails.luhua,
            rightText: 'luhua',
            leftText: '',
            link: pdfs.luhuaPdf
        },
        2: {
            thumbnail: musicThumbnails.sky,
            rightText: 'candy skies',
            leftText: '',
            link: pdfs.candySkiesPdf
        }
    }

    return (
        <>
            <div id='projects-container'>
                <Title title='projects' page='experience' link='experience' />
                <Display items={experience} />
            </div>
        
        
            <div id='projects-container'>
                <Title title='tunes' page='just for fun' link='fun' />
                <Display items={art} />
            </div>    
        </> 
    )
}

export default Projects;
