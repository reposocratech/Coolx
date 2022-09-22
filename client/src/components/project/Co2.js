import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./co2.scss";

export const Co2 = () => {
  return (
    <>
      <div className="wrapper">
        <Container fluid>
          <Row>
            <Col md={12} className="infoCo2">
              <div className="tituloCo2">
                <p>Información complementaria</p>
              </div>

              <div className="infoText">
                <div>
                  <img src="/assets/icons/Footprint.svg" />
                </div>

                <div>
                  <p>C02 a absober</p>
                  <h4>128.240 tn</h4>
                </div>
              </div>

              <div className="smallText">
                <p>Estimación realizada con tecnología satelital</p>
                <img src="/assets/icons/info.svg" />
              </div>
              <hr />

              <div className="infoPais">
                <p>
                  País:<b> Costa Rica</b>
                </p>
                <p>
                  Propuesto Verificador:<b> Verra</b>
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};
