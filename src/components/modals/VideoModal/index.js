import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import ReactPlayer from 'react-player';
import './style.css';

class VideoModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = { show: this.props.show }
    }

    componentDidUpdate() {
        if (this.state.show !== this.props.show) {
            this.setState({ show: this.props.show });
        }   
    }
    
    render() {
        return (
            <Modal show={this.state.show} onHide={this.props.handleClose}>
                <div className={'video-container'}>
                    <div className={'video-player'}>
                        <ReactPlayer url={this.props.url} width='100%' height='100%' controls={true} />
                    </div>
                </div>
                <Modal.Footer>
                <Button variant="secondary" onClick={this.props.handleClose}>
                    Close
                </Button>
                </Modal.Footer>
          </Modal>
        )
    } 
}

export default VideoModal;
