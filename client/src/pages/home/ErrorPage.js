import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./errorpage.scss";

export const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Container fluid className="fondo-error">
        <Row className="error pt-5">
          <Col md={12} lg={12} sm={12} className="columna pb-5">
            <div className="emoticono pb-5">
              <img src="./assets/inactive.svg" />
            </div>

            <h1 className="pb-2">Se generó un error</h1>
            <h4 className="pb-5">Por favor intentalo de nuevo.</h4>
            <button className="button-error" onClick={() => navigate(-1)}>
              Volver
            </button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
