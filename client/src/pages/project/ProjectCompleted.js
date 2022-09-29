import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import { ProjectInfo } from "../../components/project/ProjectInfo";
import { Vegetation } from "../../components/vegetation/Vegetation";
import "./projectCompleted.scss";
export const ProjectCompleted = () => {
  return (
    <>
      <div className="cont-completedproject">
        <div className="wrapper">
          <Container fluid>
            <Row>
              <Col md={12} className="cards-vegetation-completedproject">
                <Vegetation />
              </Col>
            </Row>

            <Row>
              <div className="cont-graficas">
                <Col md={7} className="py-3">
                  <img src="/graficas/evolution.png" />
                </Col>

                <Col md={7} className="py-3">
                  <img src="/graficas/foresthealth.png" />
                </Col>

                <Col md={7} className="py-3">
                  <img src="/graficas/co2.png" />
                </Col>

                <Col md={7} className="py-3">
                  <img src="/graficas/digitalterrain.png" />
                </Col>
              </div>
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
};
