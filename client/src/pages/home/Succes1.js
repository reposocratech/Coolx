import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./errorpage.scss";
import { useNavigate } from 'react-router-dom'

export const Succes1 = () => {

  const navigate = useNavigate();



  return (
    <div>
      <Container fluid className="fondo-error pt-5">
        <Row className="error">
          <Col className="columna pb-5">
            <div className="emoticono pb-5">
              <img src="./assets/active_on.svg" />
            </div>

            <h1 className="pb-2">Tu cuenta ha sido creada con éxito</h1>
            <h4 className="pb-5">
              Te hemos enviado un email para que puedas verificar tu cuenta.
            </h4>
            <button className="button-error" onClick={() => navigate("/login")}>Ir a mi cuenta</button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
