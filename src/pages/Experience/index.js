import React from 'react';
import NavBar from '../../components/NavBar/index';
import Footer from '../../components/Footer/index';
import { resume } from '../../assets/constants';
import './style.css';

class Experience extends React.Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <div id='experience-container'>
                <NavBar />
                <div id='experience-content'>
                    <h1>coming soon ✨</h1>
                    <a className='strike strike-purple' href={resume}>resume</a>
                </div>
                <Footer />
            </div>
        )
    }
}

export default Experience;
