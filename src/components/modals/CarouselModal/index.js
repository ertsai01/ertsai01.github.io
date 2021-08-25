import { Modal, Button, Carousel }  from 'react-bootstrap';

function CarouselModal(props) {
    const { show, handleClose, slides } = props;

    const getSlides = () => {
        let items = [];
        Object.keys(slides).forEach(index => {
            items.push(
                <Carousel.Item key={index}>
                    <img className="d-block w-100" src={slides[index]}
                    alt={"Slide " + index} />
                </Carousel.Item>
            )
        })
        return items;
    }

    return (
        <Modal show={show} onHide={handleClose}>
        <Carousel>
            {getSlides()}
        </Carousel>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    )
}

export default CarouselModal;
