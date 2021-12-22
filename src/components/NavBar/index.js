import React from 'react';
import { Link } from 'react-router-dom';
import { logo } from '../../assets/constants';
import './style.css';

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            prevScrollpos: window.pageYOffset
        }
        this.handleScroll = this.handleScroll.bind(this);
    }

    componentDidMount() {
        let navBar = document.querySelector(".nav-bar");
        if (this.props.page === 'home') {
            navBar.classList.add('home-nav-bar');
        }
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll() {
        let navBar = document.querySelector(".nav-bar");
        let currentScrollPos = window.pageYOffset;
        if (this.props.page && this.props.page === 'home') {
            if (currentScrollPos < window.innerHeight) {
                navBar.classList.add('home-nav-bar');
            }
            else {
                navBar.classList.remove('home-nav-bar');
            }
        } else {
            navBar.classList.remove('home-nav-bar');
        }
        if (this.state.prevScrollpos > currentScrollPos) navBar.style.top = "0";
        else navBar.style.top = "-50px";
        this.setState({ prevScrollpos: currentScrollPos })
    }

    render() {
        return (
            <div className='nav-bar' >
            <div id='nav-bar-left'>
                <Link to='/'><img src={logo} id='nav-bar-logo' alt='home'/></Link>
            </div>
            <div id='nav-bar-right'>
                <Link to='/about' className='strike'>about</Link>
                <Link to='/experience' className='strike'>experience</Link>
                <Link to='/music' className='strike'>music</Link>
            </div>
            </div>
            
        )
    }

    }
    

export default NavBar;
