import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./succes.scss";


export const Succes3 = () => {

  return (
    <div>
      <Container fluid className="fondo-error">
        <Row className="error">
          <Col md={12} lg={12} sm={12} className="columna pb-5">
            <div className="emoticono pb-5">
              <img src="./assets/active_on.svg" />
            </div>

            <h1 className="pb-2">Tu correo se ha enviado con éxito</h1>
            <h4 className="pb-5">Pronto nos pondremos en contacto contigo.</h4>
            
          </Col>
        </Row>
      </Container>
    </div>
  );
};
