import React, { useState } from "react";
import "./register.scss";
import { Col, Row, Button, Form, Container } from "react-bootstrap";

export const Register = () => {
  const [newUser, setNewUser] = useState({
    user_name: "",
    surname: "",
    email: "",
    phone: "",
    password: "",
    company: "",
    nif: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setNewUser({ ...newUser, [name]: value });
  };

  const handleSUbmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="fondo-register">
      <Container fluid>
        <Row className="d-flex justify-content-center">
          <div className="form-bg d-flex justify-content-center">
            <Col md={4} className="col">
              <div className="text-center">
                <h1>Registro</h1>
                <h4 className="message">Por favor, completa el formulario</h4>
              </div>

              <Form.Group controlId="contactForm">
                <Form className="d-flex flex-column">
                  <Form.Label className="labels">Nombre</Form.Label>
                  <Form.Control
                    type="text"
                    name="user_name"
                    autoComplete="off"
                    value={newUser.user_name}
                    onChange={handleChange}
                  />

                  <Form.Label className="labels mt-3 mb-2">Apellido</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    autoComplete="off"
                    value={newUser.surname}
                    onChange={handleChange}
                  />

                  <Form.Label className="labels mt-3 mb-2">Email</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    autoComplete="off"
                    value={newUser.email}
                    onChange={handleChange}
                  />

                  <Form.Label className="labels mt-3 mb-2">Teléfono</Form.Label>
                  <Form.Control
                    type="text"
                    name="tel"
                    autoComplete="off"
                    value={newUser.phone}
                    onChange={handleChange}
                  />

                  <Form.Label className="labels mt-3 mb-2">
                    Contraseña
                  </Form.Label>
                  <Form.Control
                    type="text"
                    name="password"
                    autoComplete="off"
                    value={newUser.password}
                    onChange={handleChange}
                  />

                  <Form.Label className="labels mt-3 mb-2">
                    Repite la contraseña
                  </Form.Label>
                  <Form.Control type="text" name="pass" autoComplete="off" />

                  <Form.Label className="labels mt-3 mb-2">
                    Nombre de la empresa
                  </Form.Label>
                  <Form.Control
                    type="text"
                    name="company"
                    autoComplete="off"
                    value={newUser.company}
                    onChange={handleChange}
                  />

                  <Form.Label className="labels mt-3 mb-2">N.I.F</Form.Label>
                  <Form.Control
                    type="text"
                    name="nif"
                    autoComplete="off"
                    value={newUser.nif}
                    onChange={handleChange}
                  />

                  <div>
                    <Button className="button" onClick={handleSUbmit}>
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
