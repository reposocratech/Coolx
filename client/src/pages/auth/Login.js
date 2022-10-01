import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import axios from "axios";
import jwtDecode from "jwt-decode";
import "./login.scss";
import { Footer } from "../home/Footer";

export const Login = ({ setIsLogged }) => {
  const [message, setMessage] = useState("");

  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  const [submitButton, setSubmitButton] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { value, name } = e.target;
    setLogin({ ...login, [name]: value });
    setMessage("");
    // console.log(login);

    const { email, password } = login;
    if (email && password) {
      setSubmitButton(true);
    } else {
      setSubmitButton(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (login.email === "" || login.password === "") {
      setMessage("Debe completar todos los campos!");
      // if (email === "" || password === "") {
      //   setMessage(true);
      // } else {
      //   setMessage(false);
    } else {
      axios
        .post("http://localhost:4000/users/login", login)

        .then((res) => {
          console.log(res);

          const token = res.data.token;
          window.localStorage.setItem("infocoolx", token);

          console.log("Esto es la decoficacion del token ", jwtDecode(token));

          const type = jwtDecode(token).user.type;
          console.log("Este es el tipo del usuario: ", type);

          // Para indicar que está conectado con un promp

          setIsLogged(true);

          // replace:true para evitar volver atrás al estar logueado

          type === 0
            ? navigate("/user", { replace: true })
            : type === 1
            ? navigate("/admin", { replace: true })
            : navigate("/error");

          //redireccionar a home
          //evitar login y registro
          //mostrar el button de logout
          //guardarlo en localstore
        })
        .catch((err) => {
          console.log(err);
          if (err.response.status === 401) {
            alert("Usuario no registrado o eliminado");
          } else {
            navigate("/error");
          }
          // setMessageOut("Incorrect user or password");
        });
    }
  };

  return (
    <>
      <div>
        <Container fluid className="fondo-login">
          <Row className="contAuth-login">
            <Col>
              <div>
                <div className="titulo-Login">
                  <p>Bienvenido de vuelta</p>
                </div>
                <div className="subtitulo-login">
                  <p>
                    Para iniciar sesión introduce tus credenciales a
                    continuación
                  </p>
                </div>
              </div>

              <Form.Group controlId="loginForm">
                <Form className="formAuth-login">
                  <Form.Label className="label-login">
                    Dirección de correo electrónico
                  </Form.Label>
                  <Form.Control
                    className=""
                    autoComplete="off"
                    name="email"
                    type="email"
                    value={login.email}
                    onChange={handleChange}
                  />
                  <div style={{ color: "darkblue" }}>{message}</div>
                  <Form.Label className="label-login">Contraseña</Form.Label>
                  <Form.Control
                    className=""
                    autoComplete="off"
                    name="password"
                    type="password"
                    value={login.password}
                    onChange={handleChange}
                  />

                  <div style={{ color: "darkblue" }}>{message}</div>

                  <p>¿Has olvidado tu contraseña?</p>
                </Form>

                {["checkbox"].map((type) => (
                  <div key={`inline-${type}`} className="mb-3">
                    <Form.Check
                      inline
                      label="Recordar contraseña"
                      name="group1"
                      type={type}
                      id={`inline-${type}-1`}
                    />
                  </div>
                ))}

                <div>
                  {!submitButton ? (
                    <div className="boton-login bl-disabled text-center">
                      Iniciar sesión
                    </div>
                  ) : (
                    <Button
                      className="boton-login show-bl"
                      onClick={handleSubmit}
                    >
                      Iniciar sesión
                    </Button>
                  )}
                </div>
                <div className="nada-juntos">
                  <p>¿No tienes cuenta?</p>
                  <Button
                    className="nada-nada"
                    onClick={() => navigate("/contact")}
                  >
                    Contáctanos
                  </Button>
                </div>
              </Form.Group>
            </Col>
          </Row>
        </Container>
      </div>
      <Footer />
    </>
  );
};
