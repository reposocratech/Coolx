import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container, Row, Col, Carousel, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import "./projectInfo.scss";
import { StatusProject } from "./StatusProject";

export const ProjectInfo = ({ projectInfo }) => {
  const [images, setImages] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:4000/project/images/${id}`)
      .then((res) => {
        setImages(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Container fluid className="cardProjectInfo">
      <Row>
        <Col md={12}>
          <Carousel className="imgCarousel">
            {images &&
              images.map((imagen) => {
                return (
                  <Carousel.Item key={imagen.image_id}>
                    <img
                      className="d-block w-100"
                      src={
                        imagen.file_name
                          ? `/imagesimages/${imagen.file_name}`
                          : "/images/bosque1.png"
                      }
                    />
                  </Carousel.Item>
                );
              })}
          </Carousel>

          <div className="barraStatus">
            <StatusProject projectInfo={projectInfo} />
          </div>

          <section className="descripcionProjectInfo">
            <div className="download-btn">
              <h4>Descripción</h4>
              <Button type="button">
                <img src="/assets/icons/download_white.svg" /> Descargar en PDF
              </Button>
            </div>
            <hr />
            <p>{projectInfo && projectInfo[0].project_description}</p>
          </section>
        </Col>
      </Row>
    </Container>
  );
};
