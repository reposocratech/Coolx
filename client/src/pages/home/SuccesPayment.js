import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./errorpage.scss";
import { useNavigate } from "react-router-dom";

export const SuccesPayment = ({ projects }) => {
  const navigate = useNavigate();

  return (
    <div>
      <Container fluid className="fondo-error">
        <Row className="error">
          <Col className="columna pb-5">
            <div className="emoticono pb-5">
              <img src="./assets/active_on.svg" />
            </div>

            <h1 className="pb-2">Tu pago se ha realizado con éxito</h1>
            <h4 className="pb-5">
              Puedes ver, copiar y descargar todos los datos necesarios del proyecto.
            </h4>
            <button className="button-error" onClick={() => navigate("/")}>
              Ir al proyecto
            </button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
