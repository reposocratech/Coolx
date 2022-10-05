import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";
import "./home.scss";
import { Footer } from "./Footer";

export const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <Container fluid>
        <Row>
          <Col md={12} lg={12} sm={12} className="fondo-home">
            <div className="textoHome">
              <p>
                Optimizamos el registro y la evaluación de tus proyectos
                forestales
              </p>

              <button onClick={() => navigate("/contact")}>Contáctanos</button>

              <a href="#regProject">
                <div className="leerMas">
                  <p>Leer más</p>
                  <img src="/assets/icons/arrow.svg" alt="arrow_down" />
                </div>
              </a>
            </div>
          </Col>
        </Row>

        <Row className="fondoRegProject">
          <div md={12} className="p-0 separador"></div>
          <div className="fondoBlur1">
            <Col md={12} sm={12} className="infoRegProject" id="regProject">
              <div className="wrapperRegProject">
                <Row>
                  <Col md={6} sm={12} className="topInfoRegProject">
                    <img src="/assets/icons/info_top.svg" />
                  </Col>

                  <Col md={6} sm={12} className="topInfoRegProject text-white">
                    <p>
                      Mediante teledetección y big data, disminuimos el tiempo
                      necesario para que tu consultoría medioambiental genere
                      créditos de carbono
                    </p>
                  </Col>
                </Row>

                <Row>
                  <Col
                    md={6}
                    sm={12}
                    className="bottomInfoRegProject text-white"
                  >
                    <p>
                      Esta tecnología nos permite hacer estimaciones más
                      precisas y constantes, generando confianza en cada crédito
                      de carbono
                    </p>
                  </Col>

                  <Col
                    md={6}
                    sm={12}
                    className="bottomInfoRegProject text-white"
                  >
                    <img src="/assets/icons/info_bottom.svg" />
                  </Col>
                </Row>
              </div>
            </Col>
          </div>
        </Row>

        <Row className="bloqueProcesoHome">
          <Col md={12}>
            <div className="tituloProceso">
              <h1>¿Como será el proceso?</h1>
            </div>
          </Col>
        </Row>

        <Row className="iconsProceso p-0">
          <Col md={4} className="addProject px-5">
            <img src="/assets/icons/add_project_color.svg" />

            <h4>Añade los proyectos</h4>

            <p>
              Localiza tu proyecto forestal o elige los proyectos que necesitan
              un desarrollador de nuestra plataforma
            </p>
          </Col>

          <Col md={4} className="satelite px-5">
            <img src="/assets/icons/satelite.svg" />

            <h4>Obtenemos datos relevantes</h4>

            <p>
              Procesamos dichos datos para que puedas utilizarlos de forma
              rápida y sencilla para generar créditos de carbono
            </p>
          </Col>

          <Col md={4} className="carbono px-5">
            <img src="/assets/icons/co2_color.svg" />

            <h4>Consigue créditos de carbono</h4>

            <p>
              Tus créditos serán verificados por los mejores estándares y
              monitoreados constantemente, facilitando así su venta
            </p>
          </Col>
        </Row>

        <Row className="bloqueGarantizarHome">
          <div className="fondoBlur2">
            <Col md={12} sm={12}>
              <div className="tituloBloqGarant">
                <h1>Garantizamos</h1>
              </div>
            </Col>

            <Row className="iconsGarantizar p-0 mx-2">
              <Col md={4} sm={12} className="vision px-5">
                <img src="/assets/icons/visibility_white.svg" />

                <h4>Viabilidad de tu proyecto</h4>

                <p>
                  Mediante Bigdata e IA conseguiremos saber si tu proyecto será
                  exitoso
                </p>
              </Col>

              <Col md={4} className="sencillex px-5">
                <img src="/assets/icons/easy_white.svg" />

                <h4>Sencillez</h4>

                <p>
                  Garantizamos la máxima facilidad en la tediosa tarea de
                  presentación de documentos
                </p>
              </Col>

              <Col md={4} className="medidas px-5">
                <img src="/assets/icons/measurement_white.svg" />

                <h4>Métodos de medición digitales</h4>

                <p>
                  Mediante tecnología satelital realizaremos un seguimiento de
                  tu proyecto con exactitud y rapidez
                </p>
              </Col>

              <div className="buttonBloqGarant">
                <Button
                  className="botonBloqGarant"
                  onClick={() => navigate("/contact")}
                >
                  ¿Hablamos?
                </Button>
              </div>
            </Row>
          </div>
        </Row>

        <Row className="bloqueColabs">
          <Col md={12} className="py-4">
            <h4>Respaldados y colaborando con</h4>
          </Col>

          <Col md={2} className="py-4">
            <img src="/assets/colabs/verra.svg" />
          </Col>
          <Col md={2} className="py-4">
            <img src="/assets/colabs/gold_standard.svg" />
          </Col>
          <Col md={2} className="py-4">
            <img src="/assets/colabs/aenor.svg" />
          </Col>
          <Col md={2} className="py-4">
            <img src="/assets/colabs/miteco.svg" />
          </Col>
          <Col md={2} className="py-4">
            <img src="/assets/colabs/demium.svg" />
          </Col>
          <Col md={2} className="py-4">
            <img src="/assets/colabs/university.svg" />
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};
