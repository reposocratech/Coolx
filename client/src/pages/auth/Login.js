import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";
import axios from "axios";
import jwtDecode from "jwt-decode";
import "./login.scss";

export const Login = ({ setIsLogged }) => {
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { value, name } = e.target;
    setLogin({ ...login, [name]: value });
    // console.log(login);
  };

  const handleSubmit = (e) => {
    // e.preventDefault();

    if (login.email === "" || login.password === "") {
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
        })
        .catch((err) => {
          console.log(err);
          if (err.response.status === 401) {
            alert("Usuario no registrado");
          } else {
            navigate("/error");
          }
          // setMessageOut("Incorrect user or password");
        });
    }
  };

  return (
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
                  Para iniciar sesion introduce tus credenciales a continuación
                </p>
              </div>
            </div>

            <div className="formAuth-login">
              <label>Dirección de correo electronico</label>
              <input
                className="pt-2"
                autoComplete="off"
                name="email"
                type="email"
                value={login.email}
                onChange={handleChange}
              />
              <br />

              <label>Contraseña</label>
              <input
                className="pt-2"
                autoComplete="off"
                name="password"
                type="password"
                value={login.password}
                onChange={handleChange}
              />

              <p>¿Has olvidado tu contraseña?</p>
            </div>

            <div>
              <input
                type="checkbox"
                name="remember"
                id="remember"
                class="form-check-input"
              />
              <label for="remember">Recordar contraseña</label>
            </div>

            <div>
              <button className="boton-login" onClick={handleSubmit}>
                Iniciar sesión
              </button>
            </div>
            <div className="nada-juntos">
              <button
                className="nada-nada"
                onClick={() => navigate("/contact")}
              >
                ¿No tienes cuenta? Contáctanos
              </button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
