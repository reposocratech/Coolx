import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./status.scss";

export const StatusProject = () => {
  const [statusProject, setStatusProject] = useState("");

  return (
    <>
      <div>
        <div className="wrapper">
          <Container fluid>
            <Row>
              <div className="cardStatus">
                <Col md={3}>
                  <div className="cardRegistrado">
                    <img src="/assets/icons/status1.svg" />
                    <p>Registrado</p>
                  </div>
                </Col>
                <Col md={3}>
                  <div className="cardCalculando">
                    <img src="/assets/icons/status2.svg" />
                    <p>Calculando</p>
                  </div>
                </Col>
                <Col md={3}>
                  <div className="cardCompletado">
                    <img src="/assets/icons/status3.svg" />
                    <p>Completado</p>
                  </div>
                </Col>
              </div>
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
};
