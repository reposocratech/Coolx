import React, { useState } from "react";
import "./contactForm.scss";

import {
  Col,
  Row,
  Button,
  Form,
  FloatingLabel,
  Container,
} from "react-bootstrap";

export const ContactForm = () => {
  const [user, setUser] = useState({
    userName: "",
    email: "",
    phone: "",
    userMessage: "",
  });

  return (
    <div className="fondo-contact">
      <Container fluid>
        <Row className="d-flex justify-content-center">
          <div className="form-bg d-flex justify-content-center">
            <Col md={4} className="col">
              <div className="text-center">
                <h1>Bienvenido</h1>
                <h4 className="message">
                  Contactaremos contigo lo antes posible
                </h4>
              </div>

              <Form.Group controlId="contactForm">
                <Form className="d-flex flex-column" encType="multipart/form">
                  <Form.Label className="labels">Nombre</Form.Label>
                  <Form.Control type="text" name="name" autoComplete="off" />

                  <Form.Label className="labels mt-3 mb-2">Email</Form.Label>
                  <Form.Control type="email" name="email" autoComplete="off" />

                  <Form.Label className="labels mt-3 mb-2">Teléfono</Form.Label>
                  <Form.Control type="text" name="tel" autoComplete="off" />

                  <Form.Label className="labels mt-3 mb-2">Mensaje</Form.Label>
                  <FloatingLabel controlId="mensaje" label="">
                    <Form.Control
                      className="textarea"
                      as="textarea"
                      placeholder="mensaje"
                      style={{ height: "100px" }}
                    />
                  </FloatingLabel>

                  <div>
                    <Button className="button">Enviar</Button>
                  </div>
                </Form>
              </Form.Group>
            </Col>
          </div>
        </Row>
      </Container>
    </div>
  );
};
