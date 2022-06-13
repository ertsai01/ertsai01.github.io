import './style.css';
import { logo} from '../../assets/constants';
import { Link } from 'react-router-dom';

function Footer() {

    return (
        <div id='footer'>
            <div id='footer-container'>
            <div id='footer-title'>
                <img src={logo} alt='logo' />
                <h1 id='title'>thanks for stopping by!</h1>
            </div>
            <div id='footer-nav'>
                <div className='footer-menu'>
                    <h1 className='footer-menu-title'>say hi</h1>
                    <div className='footer-menu-items'>
                        <a className='strike' href='mailto: ertsai01@berkeley.edu' target='_blank' rel="noreferrer">email</a>
                        <a className='strike' href='https://www.facebook.com/erintsaii' target='_blank' rel="noreferrer">facebook</a>
                        <a className='strike' href='https://www.linkedin.com/in/erin-tsai-9b5a28167/' target='_blank' rel="noreferrer">linkedin</a>
                    </div>
                </div>
                <div className='footer-menu'>
                    <h1 className='footer-menu-title'>more</h1>
                    <div className='footer-menu-items'>
                        <Link to='/' className='.footer-link strike' >home</Link>
                        <Link to='/about' className='.footer-link strike' >about</Link>
                        <Link to='/experience' className='.footer-link strike' >experience</Link>
                        <Link to='/fun' className='.footer-link strike' >just for fun</Link>
                    </div>
                </div>
            </div>
        </div>
        <p id='copyright'>made with ♡ by erin tsai</p>
    </div>
        
    )
}

export default Footer;
