import { Modal, Button, Image } from 'react-bootstrap';
import ReactPlayer from 'react-player';
import './style.css';

function VideoModal(props) {
    const { handleClose, show, url } = props;
    
    return (
        <Modal show={show} onHide={handleClose}>
            <div className={'video-container'}>
                <div className={'video-player'}>
                    <ReactPlayer id={'video'} url={url} width='100%' height='100%' controls={true} />
                </div>
            </div>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                Close
            </Button>
            </Modal.Footer>
      </Modal>
    )
}

export default VideoModal;
