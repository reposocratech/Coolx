import React from 'react'
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Modal from "react-bootstrap/Modal";
import Row from "react-bootstrap/Row";
import { useNavigate } from 'react-router-dom';

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
                    onClick={handleClick}
                >Subir mi proyecto
                </Button>

                <Button
                    type="button"
                    onClick={handleClick2}

                >Comprar un proyecto
                </Button>

                </Col>
             </Row>
            </Container>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={onHide}>Close</Button>
          </Modal.Footer>
        </Modal>
      );
    };