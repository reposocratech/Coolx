import React from "react";
import { Container, Row, Col, Carousel } from "react-bootstrap";
import "./projectInfo.scss";
import { StatusProject } from "./StatusProject";

export const ProjectInfo = ({ projectInfo }) => {
  return (
    <Container fluid className="cardProjectInfo">
      <Row>
        <Col md={12}>
          <Carousel className="imgCarousel">
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/images/bosque1.png"
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/images/bosque1.png"
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/images/bosque1.png"
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>

          <div className="barraStatus">
            <StatusProject projectInfo={projectInfo} />
          </div>

          <section className="descripcionProjectInfo">
            <h4>Descripción</h4>
            <hr />
            <p>{projectInfo && projectInfo[0].project_description}</p>
            <p>{projectInfo && projectInfo[0].project_description}</p>
            <p>{projectInfo && projectInfo[0].project_description}</p>
          </section>
        </Col>
      </Row>
    </Container>
  );
};
