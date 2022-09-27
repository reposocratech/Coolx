import React, { useState } from "react";
import "../../pages/auth/register.scss";

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

  const handleChange = (e) => {
    const { name, value } = e.target;

    setUser({ ...user, [name]: value });
  };

  const handleSend = (e) => {
    e.preventDefault();
  };

  return (
    <div className="register-bg">
      <Container fluid>
        <Row className="d-flex justify-content-center ">
          <div className="form-bg d-flex justify-content-center">
            <Col md={4} className="col-form">
              <div className="text-center">
                <h1>Bienvenido</h1>
                <h4 className="message-form">
                  Contactaremos contigo lo antes posible
                </h4>
              </div>

              <Form.Group controlId="contactForm">
                <Form className="d-flex flex-column">
                  <Form.Label className="labels-form">Nombre</Form.Label>
                  <Form.Control
                    type="text"
                    name="userName"
                    autoComplete="off"
                    value={user.username}
                    onChange={handleChange}
                  />

                  <Form.Label className="labels-form mt-3 mb-2">
                    Email
                  </Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    autoComplete="off"
                    value={user.email}
                    onChange={handleChange}
                  />

                  <Form.Label className="labels-form mt-3 mb-2">
                    Teléfono
                  </Form.Label>
                  <Form.Control
                    type="text"
                    name="phone"
                    autoComplete="off"
                    value={user.phone}
                    onChange={handleChange}
                  />

                  <Form.Label className="labels-form mt-3 mb-2">
                    Mensaje
                  </Form.Label>
                  <FloatingLabel controlId="mensaje" label="">
                    <Form.Control
                      className="textarea-form"
                      as="textarea"
                      placeholder="mensaje"
                      name="userMessage"
                      value={user.userMessage}
                      onChange={handleChange}
                      style={{ height: "100px" }}
                    />
                  </FloatingLabel>

                  <div>
                    <Button className="button-form" onClick={handleSend}>
                      Enviar
                    </Button>
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
