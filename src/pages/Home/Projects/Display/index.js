import './style.css';
import Fade from 'react-reveal/Fade';

function Display(props) {

    return (
        <Fade right>
            <div id='display-container'>
            {Object.values(props.items).map(item => {
                const [thumbnail, rightText, leftText, link] = Object.values(item);
                const altText = `Visit project: ${rightText}`
                return (
                    <div className='display-item'>
                        <p id='display-text-right'>{rightText}</p>
                        <p id='display-text-left'>{leftText}</p>
                        <a href={link} target='_blank' rel="noreferrer" >
                            <img src={thumbnail} alt={altText} />
                        </a>
                    </div>
                );
            })}
                <div className='display-item display-text-container'>
                    <p>+ more coming soon</p>
                </div>
            </div>
        </Fade>  
    )
}

export default Display;
