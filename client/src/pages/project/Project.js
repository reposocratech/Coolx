import React from "react";
import { ProjectInfo } from "../../components/project/ProjectInfo";
import { Col, Container, Row } from "react-bootstrap";
import { CostProfit } from "../../components/project/CostProfit";
import "./projectMain.scss";
import { Co2 } from "../../components/project/Co2";
import { Requirements } from "../../components/project/Requirements";
import { BlockedInfo } from "../../components/project/BlockedInfo";
import { useNavigate } from "react-router-dom";

export const Project = () => {

  const navigate = useNavigate();
  
  return (
    <>
      <div className="contenedorProject">
        <div className="wrapperProject">
          <Container fluid>
            <Row>
              <Col md={12} className="projectCard">

                <div className="title-project">
                  <a onClick={()=> navigate(-1)}><img src="/assets/icons/arrow_left.svg"/></a>
                  <p>Proyecto Santa Elena</p>
                </div>
                
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
    </>
  );
};
