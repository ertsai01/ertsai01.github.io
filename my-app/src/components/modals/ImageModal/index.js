import Modal from 'react-bootstrap/modal';
import Button from 'react-bootstrap/button';
import Image from 'react-bootstrap/image';

function ImageModal(props) {
  const { show, img, handleClose } = props;

  return (
    <Modal size='lg' show={show} onHide={handleClose}>
      <Image src={img}/>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default ImageModal;
