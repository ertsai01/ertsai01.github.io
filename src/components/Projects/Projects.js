import React from 'react';
import './style.css';
import Fade from 'react-reveal/Fade';

class Projects extends React.Component {

    render() {
        return (
            <Fade>
                <div className='project'>
                    {/* <DisplayItem thumbnail={this.props.image} rightText={this.props.projName} leftText={this.props.tech} link={this.props.link} /> */}
                    <a href={this.props.link} target='_blank' rel="noreferrer" className='project-thumbnail'>
                        <img src={this.props.image} alt={this.props.alt} />
                    </a>
                    <div>
                        <h4>{this.props.projName}</h4>
                        <p style={{color: 'var(--light-gray)', width: '200px'}}>{this.props.tools}</p>
                    </div>
                    <div className='role-bar'></div>
                    <p id='project-description'>{this.props.description}</p>
                </div>
            </Fade>
        )
    }
}


export default Projects;
