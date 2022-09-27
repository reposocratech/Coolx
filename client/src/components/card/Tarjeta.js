import axios from "axios";
import React from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./tarjeta.scss";

export const Tarjeta = ({ projects }) => {
  const navigate = useNavigate();

  // console.log(projects);

  const handleSend = (id) => {
    axios
      .get(`http://localhost:4000/project/${id}`)
      .then((res) => {
        console.log(res);
        navigate(`/project/${id}`);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Container>
      {projects &&
        projects.map((project, index) => {
          return (
            <div className="bage">
              <Row className="contenedor " key={project.project_id}>
                <Col className="img">
                  <img src="/images/Bosque.jpg" />
                </Col>

                <Col className="letras">
                  <div>
                    <h4>{project.project_name}</h4>
                  </div>

                  <div className="division">
                    <div>
                      <img src="/assets/icons/location.svg" />
                    </div>

                    <div>
                      <p>{project.location}</p>
                    </div>
                  </div>

                  <div className="division">
                    <div>
                      <img src="/assets/icons/location.svg" />
                    </div>

                    <div>
                      <p>{project.area}</p>
                    </div>
                  </div>

                  <div className="division">
                    <div className="prueba">
                      <img src="/assets/icons/location.svg" />
                    </div>

                    <div>
                      <h5>Ganacias consultora</h5>
                      <h4>{project.profit} $</h4>
                    </div>
                  </div>

                  <div>
                    <button
                      className="butun"
                      onClick={() => handleSend(project.project_id)}
                    >
                      Ver más
                    </button>
                  </div>
                </Col>
              </Row>
            </div>
          );
        })}
    </Container>
  );
};