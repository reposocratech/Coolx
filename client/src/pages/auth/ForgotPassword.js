import React, { useState } from "react";
import "./login.scss";
import axios from "axios";
import loading from "../../components/img/loading.svg";
import Swal from "sweetalert2";
import { Container, Row, Col, Button, Form } from "react-bootstrap";

export const ForgorPassword = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState({ email: "" });

  console.log(email);

  const handleSubmit = (e) => {
    // setIsLoading(true);
    axios
      .post("http://localhost:4000/password", email)
      .then((res) => {
        setIsLoading(false);
        Swal.fire({
          showConfirmButton: true,
          icon: "success",
          text: "Revise su email, se le ha enviado un enalce para crear una nueva contraseña",
        });
      })
      .catch((err) => {
        setIsLoading(false);
        Swal.fire({
          showConfirmButton: true,
          icon: "error",
          text: "Ha sucedido un error al intentar enviar los datos, compruebe el correo electronico o vuelva a intentarlo mas tarde",
        });
      });
  };

  return (
    <>
      <div>
        <Container fluid className="fondo-login">
          <div className="main">
            <Form.Group controlId="loginForm">
              <Row className="contAuth-login">
                <h3 className="titulo-Login">Recuperar cuenta</h3>
                <Form.Label className="label-login" align="center">
                  Correo electronico
                </Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Introduce tu email"
                  value={email.email}
                  required
                  onChange={(e) =>
                    setEmail({ ...email, email: e.target.value })
                  }
                />
                <div className="nada-juntos">
                  {isLoading ? (
                    <div className="loadingImage">
                      <img src={loading} alt="loading" />
                    </div>
                  ) : (
                    <Button
                      className="boton-login show-bl"
                      onClick={handleSubmit}
                    >
                      Enviar
                    </Button>
                  )}
                </div>
              </Row>
            </Form.Group>
          </div>
        </Container>
      </div>
    </>
  );
};
