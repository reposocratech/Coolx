import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./status.scss";

export const StatusProject = ({ projectInfo }) => {
  const [statusProject, setStatusProject] = useState("");
  const [statusOn0, setStatusOn0] = useState("status-off");
  const [statusOn1, setStatusOn1] = useState("status-off");
  const [statusOn2, setStatusOn2] = useState("status-off");

  return (
    <div>
      <Container fluid>
        <Row>
          <div className="cardStatus p-0">
            <Col md={4} xs={4}>
              <div className={`${statusOn0} cardRegistrado`}>
                {projectInfo && projectInfo[0].status === 0 ? "hola" : "chau"}
                <img src="/assets/icons/status1_grey.svg" />
                <p>Registrado</p>
              </div>
            </Col>
            <Col md={4} xs={4}>
              <div className={`${statusOn1} cardCalculando`}>
                {projectInfo && projectInfo[0].status === 1 ? "hola" : "chau"}
                {/* {projectInfo && projectInfo[0].status === 1 ?
                 (
                  setStatusOn1("status-on") && 
                    <img src="/assets/icons/status2_white.svg" />
                  )
                ) :
                 (
                  setStatusOn1("status-off") && 
                  <img src="/assets/icons/status2_grey.svg" />
                  )
                } */}

                <img src="/assets/icons/status2_grey.svg" />
                <p>Calculando</p>
              </div>
            </Col>
            <Col md={4} xs={4}>
              <div className="cardCompletado">
                <img src="/assets/icons/status3_grey.svg" />
                <p>Completado</p>
              </div>
            </Col>
          </div>
        </Row>
      </Container>
    </div>
  );
};
