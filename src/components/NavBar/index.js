import React from 'react';
import { Link } from 'react-router-dom';
import { logo } from '../../assets/constants';
import './style.css';

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            prevScrollpos: window.pageYOffset,
            transparent: false
        }
        this.handleScroll = this.handleScroll.bind(this);
    }

    componentDidMount() {
        if (this.props.page === 'home') {
            this.setState({transparent: true});
            window.addEventListener('scroll', this.handleScroll);
        }
    }

    componentDidUpdate() {
        const navBar = document.querySelector(".nav-bar");
        if (this.state.transparent) navBar.style.backgroundColor = 'transparent';
        else navBar.style.backgroundColor = 'var(--primary-gray)';
    }

    componentWillUnmount() {
        if (this.props.page === 'home') {
            window.removeEventListener('scroll', this.handleScroll);
        }
    }

    handleScroll() {
        let currentScrollPos = window.pageYOffset;
        if (this.props.page === 'home') {
            if (currentScrollPos < window.innerHeight) {
                if (this.state.transparent === false) this.setState({transparent: true});
            } else {
                if (this.state.transparent === true) this.setState({transparent: false});
            }
        }
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
                <Link to='fun' className='strike'>just for fun</Link>
            </div>
            </div>
            
        )
    }

    }
    

export default NavBar;
