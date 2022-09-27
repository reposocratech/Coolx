import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Tarjeta } from "../../components/card/Tarjeta";
import "./user.scss";

export const MyProjects = ({ projects }) => {
  const navigate = useNavigate();

  console.log(projects);

  return (
    <>
      <Container>
        <Row>
          <Col md={8} className="card-container">
            <Tarjeta projects={projects} />
          </Col>

          <Col md={4} className="add-container">
            <button
              className="add-button"
              onClick={() => navigate("/projectform")}
            >
              <div>
                <div className="add-circle">
                  <h2>+</h2>
                </div>
                <p>Añadir proyecto</p>
              </div>
            </button>
          </Col>
        </Row>
      </Container>
    </>
  );
};
