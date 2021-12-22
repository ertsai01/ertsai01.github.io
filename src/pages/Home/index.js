import React from 'react';
import './style.css';
import Landing from './Landing/index';
import About from './About/index';
import Projects from './Projects/index';
import Footer from '../../components/Footer/index';
import NavBar from '../../components/NavBar/index';


class Home extends React.Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <div className='home-container'>
                <NavBar page='home' />
                <Landing />
                <About />
                <Projects />
                <Footer />
            </div>
        )
    }
}

export default Home;
