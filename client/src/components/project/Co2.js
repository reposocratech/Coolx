import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./co2.scss";

export const Co2 = () => {
  return (
    <>
      <div className="wrapper">
        <Container fluid>
          <Row>
            <Col md={12} className="cardCo2">
              <div className="tituloVerific text-center">
                <p>Requisitos verificados por Coolx</p>
              </div>

              <div className="adicional">
                <Col md={3} className="icon">
                  <img src="/assets/icons/circle_tree.svg" />
                </Col>

                <Col md={9} className="check">
                  <p>Adicional</p>
                  <img src="/assets/icons/check_mark.svg" />
                </Col>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};
