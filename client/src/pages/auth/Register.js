import React, { useState } from "react";
import "./register.scss";
import { Col, Row, Button, Form, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Footer } from "../home/Footer";

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
  const [message, setMessage] = useState("");
  const [messagePassword, setMessagePassword] = useState("");
  const [checkPass, setCheckPass] = useState({
    pass: "",
  });
  const [submitButton, setSubmitButton] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    // console.log(name, value);
    setMessage("");
    setNewUser({ ...newUser, [name]: value });

    const { user_name, surname, email, phone, password, company, nif } =
      newUser;
    if (user_name && surname && email && phone && password && company && nif) {
      setSubmitButton(true);
    } else {
      setSubmitButton(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      newUser.name === "" ||
      newUser.surname === "" ||
      newUser.email === "" ||
      newUser.phone === "" ||
      newUser.password === "" ||
      newUser.company === "" ||
      newUser.nif === ""
    ) {
      setMessage("Debe completar todos los campos!");
    }
    console.log(
      "ESTE ES NEWUSER " + newUser.password,
      "ESTE ES CHEKCPASS" + checkPass.pass
    );
    if (newUser.password !== checkPass.pass) {
      setMessagePassword("LAS CONSTRASEÑAS DEBEN SER IGUALES");
      console.log("CONTRASEÑA DONT MATCH");
    } else {
      axios
        .post("http://localhost:4000/users/registrocoolx", newUser)
        .then((res) => {
          console.log(res);
          setNewUser({
            user_name: "",
            surname: "",
            email: "",
            phone: "",
            password: "",
            company: "",
            nif: "",
          });
          navigate("/succes1");
        })
        .catch((err) => {
          // console.log(err);
          if (err.response.data.error.errno === 1062) {
            alert("Email or N.I.F already exist");
          } else {
            navigate("/error");
          }
        });
    }
  };

  const handleChangePass = (e) => {
    const { name, value } = e.target;
    setCheckPass({ ...checkPass, [name]: value });
    // console.log("REPITE CONTRASEÑA");
  };

  // PARA MENSAJE
  // const { name, email, password } = register;

  //   if (name === "" || email === "" || password === "") {
  //     setMessage(true);
  //   } else {
  //     setMessage(false);

  return (
    <>
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
                    <Row>
                      <Col md={6}>
                        <Form.Label className="labels-form">Nombre</Form.Label>
                        <Form.Control
                          className="mb-3"
                          type="text"
                          name="user_name"
                          autoComplete="off"
                          value={newUser.user_name}
                          onChange={handleChange}
                        />
                        <div style={{ color: "darkblue" }}>{message}</div>
                      </Col>

                      <Col md={6}>
                        <Form.Label className="labels-form mb-2">
                          Apellido
                        </Form.Label>
                        <Form.Control
                          className="mb-3"
                          type="text"
                          name="surname"
                          autoComplete="off"
                          value={newUser.surname}
                          onChange={handleChange}
                        />
                        <div style={{ color: "darkblue" }}>{message}</div>
                      </Col>

                      <Col md={6}>
                        <div style={{ color: "darkblue" }}>{message}</div>
                        <Form.Label className="labels-form mb-2">
                          Nombre de la empresa
                        </Form.Label>
                        <Form.Control
                          className="mb-3"
                          type="text"
                          name="company"
                          autoComplete="off"
                          value={newUser.company}
                          onChange={handleChange}
                        />
                        <div style={{ color: "darkblue" }}>{message}</div>
                      </Col>

                      <Col md={6}>
                        <Form.Label className="labels-form mb-2">
                          N.I.F
                        </Form.Label>
                        <Form.Control
                          className="mb-3"
                          type="text"
                          name="nif"
                          autoComplete="off"
                          value={newUser.nif}
                          onChange={handleChange}
                        />
                        <div style={{ color: "darkblue" }}>{message}</div>
                      </Col>
                    </Row>

                    <Row>
                      <Col md={6}>
                        <Form.Label className="labels-form mb-2">
                          Email
                        </Form.Label>
                        <Form.Control
                          className="mb-3"
                          type="email"
                          name="email"
                          autoComplete="off"
                          value={newUser.email}
                          onChange={handleChange}
                        />
                        <div style={{ color: "darkblue" }}>{message}</div>
                      </Col>

                      <Col md={6}>
                        <Form.Label className="labels-form mb-2">
                          Teléfono
                        </Form.Label>
                        <Form.Control
                          className="mb-3"
                          type="text"
                          name="phone"
                          autoComplete="off"
                          value={newUser.phone}
                          onChange={handleChange}
                        />
                        <div style={{ color: "darkblue" }}>{message}</div>
                      </Col>

                      <Col md={6}>
                        <Form.Label className="labels-form mb-2">
                          Contraseña
                        </Form.Label>
                        <Form.Control
                          className="mb-3"
                          type="password"
                          name="password"
                          autoComplete="off"
                          value={newUser.password}
                          onChange={handleChange}
                        />
                        <div style={{ color: "darkblue" }}>{message}</div>
                        <div style={{ color: "darkblue" }}>
                          {messagePassword}
                        </div>
                      </Col>

                      <Col md={6}>
                        <Form.Label className="labels-form mb-2">
                          Repite la contraseña
                        </Form.Label>
                        <Form.Control
                          className="mb-3"
                          type="password"
                          name="pass"
                          autoComplete="off"
                          value={checkPass.pass}
                          onChange={handleChangePass}
                        />
                      </Col>
                    </Row>

                    <div>
                      {!submitButton ? (
                        <div className="button-form bf-disabled text-center">
                          Enviar
                        </div>
                      ) : (
                        <Button
                          className="button-form show-bf"
                          onClick={handleSubmit}
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
