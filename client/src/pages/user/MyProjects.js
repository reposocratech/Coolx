import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./user.scss";

export const MyProjects = () => {
  return (
    <>
      <Container>
        <Row>
          <Col md={8} className="card-container">
            {/* CARD DE PROYECTOS */}
          </Col>

          <Col md={4} className="add-container">
            <button className="add-button">
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
