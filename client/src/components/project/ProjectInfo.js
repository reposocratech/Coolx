import React from "react";
import { Container, Row, Col, Carousel } from "react-bootstrap";
import "./projectInfo.scss";
import { StatusProject } from "./StatusProject";

export const ProjectInfo = () => {
  return (
    <>
      <div>
        <div className="wrapper">
          <Container fluid>
            <Row>
              <Col md={12} className="cardProjectInfo img">
                <Carousel>
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
                  <StatusProject />
                </div>

                <section className="descripcion">
                  <p>Descripción</p>
                  <hr />
                  <p>
                    El Proyecto de Reforestación Santa Elena busca la
                    reforestación de los bosques situados en 6 resguardos
                    indígenas del Pueblo Sikuani ubicados en el Municipio de
                    Santa Elena. Los resguardos suman una superficie total de
                    1.517 ha.
                    <br />
                    Las actividades principales del proyecto incluyen el
                    fortalecimiento institucional y de la educación,
                    reforestación participativa, monitoreo y control de la
                    deforestación y degradación, protección y conservación de la
                    biodiversidad, producción, autoabastecimiento y
                    comercialización de diversos cultivos y aprovechamiento
                    silvopastoril, entre otras.
                    <br />
                    Como resultado de las diferentes actividades que se llevarán
                    a cabo será posible reducir todo el área deforestada en años
                    anteriores, lo que se estima una absorción total de 128.240
                    tCO2e durante el periodo de monitoreo.
                  </p>
                </section>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
};
