import React from 'react';
import DisplayItem from '../../components/DisplayItem/index';
import './style.css';
import Fade from 'react-reveal/Fade';

class Roles extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hover: false
        }
    }

    render() {
        return (
            <Fade>
            <div className='role-item'>
                <DisplayItem thumbnail={this.props.image} rightText={this.props.orgName} leftText={this.props.date} link={this.props.link} />
                <div className='role'>
                    <div className='flex-row role-text' onMouseOver={() => this.setState({hover: true})} onMouseLeave={() => this.setState({hover: false})}>
                        <div className='flex-col'>
                            <h4>{this.props.orgName}</h4>
                            <div className='flex-row' id='role-title'>
                                <h5>{this.props.role} &nbsp;</h5> 
                                {this.state.hover ? <p>▲</p> : <p>▼</p>}
                            </div>
                            <div className='role-bar'></div>
                            { this.state.hover && 
                            <Fade>
                                <p id='role-description'>{this.props.description}</p>
                            </Fade>
                             }
                        </div>
                    </div> 
                </div>
            </div>
            </Fade>
        )
    }
}


export default Roles;
