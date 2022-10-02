import React, { useState } from "react";
import "../../pages/auth/register.scss";
import axios from "axios";

import {
  Col,
  Row,
  Button,
  Form,
  FloatingLabel,
  Container,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export const ContactForm = () => {

  const [message, setMessage] = useState("")

  const [user, setUser] = useState({
    userName: "",
    email: "",
    phone: "",
    userMessage: "",
  });

  const navigate = useNavigate()

  const handleChange = (e) => {
    const { name, value } = e.target;

    setUser({ ...user, [name]: value });
    setMessage("")
  };

  const handleSend = (e) => {
    e.preventDefault();
    if(user.name === "" || user.email === "" || user.phone === "" || user.userMessage === "") {
      setMessage("Los campos deben estar completos")
    } else {
    axios.post("http://localhost:4000/contact",user)
    .then((res) => {
      console.log(res);
      navigate("/succes3")
    })
    .catch((err) => console.log(err))
    }
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
                   <div style={{color:"darkblue"}}>{message}</div>

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
                   <div style={{color:"darkblue"}}>{message}</div>

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
                   <div style={{color:"darkblue"}}>{message}</div>

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
                     <div style={{color:"darkblue"}}>{message}</div>
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
