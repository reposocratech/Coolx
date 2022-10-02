import React from 'react'
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Modal from "react-bootstrap/Modal";
import Row from "react-bootstrap/Row";
import { useNavigate } from 'react-router-dom';
import "./buymodal.scss"

export const BuyModal = ({onHide, show, setModalBuy}) => {

const handleClick = () => {
    navigate("/projectform");
}

const handleClick2 = () => {
    navigate("/buyproject");
}

const navigate = useNavigate();

    return (
        <Modal show={show} aria-labelledby="contained-modal-title-vcenter">
          <Modal.Header>
            <Modal.Title id="contained-modal-title-vcenter">
              <p> ¿Prefieres subir tu propio proyecto o comprarlo</p> 
            </Modal.Title>
          </Modal.Header>
          <Modal.Body className="show-grid">
            <Container>
             <Row>
                <Col>
                <Button
                    type="button"
                    className='add-newproject-modal me-2'
                    onClick={handleClick}
                >Subir mi proyecto
                </Button>

                <Button
                    type="button"
                    className='buy-newproject-modal'
                    onClick={handleClick2}

                >Comprar un proyecto
                </Button>

                </Col>
             </Row>
            </Container>
          </Modal.Body>
          <Modal.Footer>
            <Button className='exit-buyproject-modal' onClick={onHide}>Close</Button>
          </Modal.Footer>
        </Modal>
      );
    };