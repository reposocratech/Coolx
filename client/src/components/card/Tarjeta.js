import axios from "axios";
import React from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./tarjeta.scss";

export const Tarjeta = ({ projects }) => {
  const navigate = useNavigate();

  // console.log(projects);

  const handleSend = (project) => {
    axios
      .get(`http://localhost:4000/project/${project.project_id}`)
      .then((res) => {
        console.log(res);

        if (project.status === 0 || project.status === 1) {
          navigate(`/project/${project.project_id}`);
        } else if (project.status === 3) {
          navigate(`/project/${project.project_id}`);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      {projects &&
        projects.map((project, index) => {
          return (
            <Container fluid key={project.project_id}>
              <Row className="project-card-container ">
                <Col lg={5} className="card-img">
                  <img src="/images/Bosque.jpg" />
                </Col>

                <Col lg={7} className="card-information">
                  <Row>
                    <Col className="p-card-title">
                      <h4>{project.project_name}</h4>
                    </Col>
                  </Row>

                  <Row>
                    <Col lg={12} className="p-card-text">
                      <img src="/assets/icons/location.svg" />

                      <p>
                        <b>{project.location}</b>
                      </p>
                    </Col>

                    <Col lg={12} className="p-card-text">
                      <img src="/assets/icons/area.svg" />

                      <p>
                        <b>{project.area}</b>, área del terreno
                      </p>
                    </Col>
                  </Row>

                  <Row className="p-card-profit">
                    <Col lg={2} className="p-0 ">
                      <img
                        className="project-pic"
                        src="/assets/icons/money.svg"
                      />
                    </Col>

                    <Col lg={10} className="p-0 d-flex align-items-end">
                      <div>
                        <p>Ganacias consultora</p>
                        <h4>{project.profit} $</h4>
                      </div>
                    </Col>
                  </Row>

                  <Row>
                    <Col>
                      <Button
                        className="p-card-button"
                        onClick={() => handleSend(project)}
                      >
                        Ver más
                      </Button>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
          );
        })}
    </>
  );
};