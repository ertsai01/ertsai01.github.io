import React from 'react';
import './style.css';
import Landing from './Landing/index';
import About from './About/index';
import Projects from './Projects/index';
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';

class Home extends React.Component {
    
    componentWillMount() {
        window.scrollTo({top: 0, behavior: 'instant'});
    }

    render() {
        return (
            <>
            <NavBar page='home' />
            <div className='home-container'>
                <Landing />
                <About />
                <Projects />
            </div>
            <Footer />
            </>
        )
    }
}

export default Home;
