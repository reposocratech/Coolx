import React, { useEffect, useState } from "react";
import { ProjectInfo } from "../../components/project/ProjectInfo";
import { Col, Container, Row } from "react-bootstrap";
import { CostProfit } from "../../components/project/CostProfit";
import "./projectMain.scss";
import { Co2 } from "../../components/project/Co2";
import { Requirements } from "../../components/project/Requirements";
import { BlockedInfo } from "../../components/project/BlockedInfo";
import { ProjectCompleted } from "./ProjectCompleted";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { Footer } from "../home/Footer";

export const Project = () => {
  const [projectInfo, setProjectInfo] = useState();
  const { id } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:4000/project/${id}`)
      .then((res) => {
        setProjectInfo(res.data);
        // console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <div className="wrapper">
        <div className="wrapperProject">
          <Container fluid>
            <Row className="mb-3">
              <Col md={12} className="projectCard">
                <div className="title-project">
                  <a onClick={() => navigate(-1)}>
                    <img src="/assets/icons/arrow_left.svg" />
                  </a>
                  <p>Proyecto {projectInfo && projectInfo[0].project_name}</p>
                </div>
              </Col>

              <Col md={8}>
                <ProjectInfo projectInfo={projectInfo} />
              </Col>

              <Col md={4}>
                <CostProfit projectInfo={projectInfo} />
                <Requirements />
                <Co2 projectInfo={projectInfo} />
              </Col>
            </Row>

            {projectInfo &&
              (projectInfo[0].status === 0 || projectInfo[0].status === 1 ? (
                <Row>
                  <Col>
                    <BlockedInfo projectInfo={projectInfo} />
                  </Col>
                </Row>
              ) : (
                <Row>
                  <Col>
                    <ProjectCompleted />
                  </Col>
                </Row>
              ))}
          </Container>
        </div>
      </div>
      <Footer />
    </>
  );
};
