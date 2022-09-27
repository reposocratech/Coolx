import React from "react";
import { ProjectInfo } from "../../components/project/ProjectInfo";
import { Col, Container, Row } from "react-bootstrap";
import { CostProfit } from "../../components/project/CostProfit";
import "./projectMain.scss";
import { Co2 } from "../../components/project/Co2";
import { Requirements } from "../../components/project/Requirements";
import { BlockedInfo } from "../../components/project/BlockedInfo";

export const Project = () => {
  return (
    <div className="contenedorProject">
      <div className="wrapperProject">
        <Container fluid>
          <Row>
            <Col md={12} className="projectCard">
              <p>Proyecto Santa Elena</p>
            </Col>
            <Col md={9}>
              <ProjectInfo />
            </Col>

            <Col md={3}>
              <CostProfit />
              <Requirements />
              <Co2 />
            </Col>
          </Row>

          <Row>
            <Col>
              <BlockedInfo />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};
