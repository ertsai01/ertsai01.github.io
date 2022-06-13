import './style.css';
import Fade from 'react-reveal/Fade';
import DisplayItem from '../../../../components/DisplayItem/index';

function Display(props) {

    return (
        <Fade right>
            <div id='display-container'>
            {Object.values(props.items).map(item => {
                const [thumbnail, rightText, leftText, link, alt] = Object.values(item);
                return (
                    <DisplayItem thumbnail={thumbnail} rightText={rightText} leftText={leftText} link={link} alt={alt} />
                );
            })}
            </div>
        </Fade>  
    )
}

export default Display;
