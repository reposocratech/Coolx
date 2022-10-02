import React, { useEffect, useState } from "react";
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
import "./contact.scss";
import { Footer } from "../../pages/home/Footer";

export const ContactForm = () => {
  const [user, setUser] = useState({
    userName: "",
    email: "",
    phone: "",
    userMessage: "",
  });
  const [submitButton, setSubmitButton] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(e.target);
    setUser({ ...user, [name]: value });

    const { userName, email, phone, userMessage } = user;
    if (userName && email && phone && userMessage) {
      setSubmitButton(true);
    } else {
      setSubmitButton(false);
    }
  };

  const handleSend = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:4000/contact", user)
      .then((res) => {
        console.log(res);
        setUser({ userName: "", email: "", phone: "", userMessage: "" });
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div className="contact-bg">
        <Container fluid>
          <Row className="d-flex justify-content-center ">
            <div className="contact-form-bg d-flex justify-content-center">
              <Col md={4} className="col-contact">
                <div className="text-center">
                  <h1>Bienvenido</h1>
                  <h4 className="message-contact">
                    Contactaremos contigo lo antes posible
                  </h4>
                </div>

                <Form.Group controlId="contactForm">
                  <Form className="d-flex flex-column">
                    <Form.Label className="labels-contact">Nombre</Form.Label>
                    <Form.Control
                      type="text"
                      name="userName"
                      autoComplete="off"
                      value={user.username}
                      onChange={handleChange}
                    />

                    <Form.Label className="labels-contact mt-3 mb-2">
                      Email
                    </Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      autoComplete="off"
                      value={user.email}
                      onChange={handleChange}
                    />

                    <Form.Label className="labels-contact mt-3 mb-2">
                      Teléfono
                    </Form.Label>
                    <Form.Control
                      type="text"
                      name="phone"
                      autoComplete="off"
                      value={user.phone}
                      onChange={handleChange}
                    />

                    <Form.Label className="labels-contact mt-3 mb-2">
                      Mensaje
                    </Form.Label>
                    <FloatingLabel controlId="mensaje" label="">
                      <Form.Control
                        className="textarea-contact"
                        as="textarea"
                        placeholder="mensaje"
                        name="userMessage"
                        value={user.userMessage}
                        onChange={handleChange}
                        style={{ height: "100px" }}
                      />
                    </FloatingLabel>

                    <div>
                      {!submitButton ? (
                        <div className="button-contact-form b-disabled text-center">
                          Enviar
                        </div>
                      ) : (
                        <Button
                          className="button-contact-form show-b"
                          onClick={handleSend}
                        >
                          Enviar
                        </Button>
                      )}
                    </div>
                  </Form>
                </Form.Group>
              </Col>
            </div>
          </Row>
        </Container>
      </div>
      <Footer />
    </>
  );
};
