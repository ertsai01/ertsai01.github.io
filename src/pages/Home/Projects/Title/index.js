import './style.css';
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';

function Title(props) {

    return (
        <Fade left>
            <div id='title-container'>
                <h1 id='bright-title'>{props.title}</h1>
                <Link className='strike' to={`/${props.link}`}><h1 id='title-link'>{`view ${props.page}`}</h1></Link>
                <h1 id='dark-title'>{props.title}</h1>
            </div>
        </Fade>
        
    )
}

export default Title;
