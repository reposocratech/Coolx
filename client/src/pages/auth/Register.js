import React, { useState } from "react";
import "./register.scss";
import { Col, Row, Button, Form, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";

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

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);

    setNewUser({ ...newUser, [name]: value });

    console.log(newUser);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:4000/users/registrocoolx", newUser)
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          navigate("/succes1");
        }
      })
      .catch((err) => {
        console.log(err);
        if (err.response.status === 404) {
          navigate("/error");
        }
        if (err.response.data.error.errno === 1062) {
          alert("Email already exist");
        }
      });
  };

  // PARA MENSAJE
  // const { name, email, password } = register;

  //   if (name === "" || email === "" || password === "") {
  //     setMessage(true);
  //   } else {
  //     setMessage(false);

  return (
    <div className="register-bg">
      <Container fluid>
        <Row className="d-flex justify-content-center">
          <div className="form-bg d-flex justify-content-center">
            <Col md={4} className="col-form">
              <div className="text-center">
                <h1>Registro</h1>
                <h4 className="message-form">
                  Por favor, completa el formulario
                </h4>
              </div>

              <Form.Group controlId="contactForm">
                <Form className="d-flex flex-column">
                  <Form.Label className="labels-form">Nombre</Form.Label>
                  <Form.Control
                    type="text"
                    name="user_name"
                    autoComplete="off"
                    value={newUser.user_name}
                    onChange={handleChange}
                  />

                  <Form.Label className="labels-form mt-3 mb-2">
                    Apellido
                  </Form.Label>
                  <Form.Control
                    type="text"
                    name="surname"
                    autoComplete="off"
                    value={newUser.surname}
                    onChange={handleChange}
                  />

                  <Form.Label className="labels-form mt-3 mb-2">
                    Email
                  </Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    autoComplete="off"
                    value={newUser.email}
                    onChange={handleChange}
                  />

                  <Form.Label className="labels-form mt-3 mb-2">
                    Teléfono
                  </Form.Label>
                  <Form.Control
                    type="text"
                    name="phone"
                    autoComplete="off"
                    value={newUser.phone}
                    onChange={handleChange}
                  />

                  <Form.Label className="labels-form mt-3 mb-2">
                    Contraseña
                  </Form.Label>
                  <Form.Control
                    type="password"
                    name="password"
                    autoComplete="off"
                    value={newUser.password}
                    onChange={handleChange}
                  />

                  {/* <Form.Label className="labels-form mt-3 mb-2">
                    Repite la contraseña
                  </Form.Label>
                  <Form.Control type="text" name="pass" autoComplete="off" /> */}

                  <Form.Label className="labels-form mt-3 mb-2">
                    Nombre de la empresa
                  </Form.Label>
                  <Form.Control
                    type="text"
                    name="company"
                    autoComplete="off"
                    value={newUser.company}
                    onChange={handleChange}
                  />

                  <Form.Label className="labels-form mt-3 mb-2">
                    N.I.F
                  </Form.Label>
                  <Form.Control
                    type="text"
                    name="nif"
                    autoComplete="off"
                    value={newUser.nif}
                    onChange={handleChange}
                  />

                  <div>
                    <Button className="button-form" onClick={handleSubmit}>
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
