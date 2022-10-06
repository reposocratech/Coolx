import axios from "axios";
import React, { useEffect, useState } from "react";
import { Row, Col, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { ExtraData } from "../../components/vegetation/ExtraData";
import { Vegetation } from "../../components/vegetation/Vegetation";
import "./projectCompleted.scss";

export const ProjectCompleted = () => {
  const [projectPayed, setProjectPayed] = useState();
  const [reseteProject, setResetProject] = useState(false);

  useEffect(() => {
    let pathname = window.location.pathname;
    const id = pathname.split("/")[2];
    console.log(id);

    axios
      .get(`http://localhost:4000/project/${id}/info`)
      .then((res) => {
        setProjectPayed(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [reseteProject]);

  return (
    <>
      <Container fluid id="moreInfo">
        <Row>
          <Col className="cards-vegetation-completedproject p-0">
            <Vegetation projectPayed={projectPayed} />
          </Col>
        </Row>

        <Row className="cont-graficas">
          <Col lg={12} xl={6} className="p-0">
            <img src="/graficas/evolution.svg" />
          </Col>

          <Col lg={12} xl={6} className="p-0">
            <img src="/graficas/foresthealth.svg" />
          </Col>

          <Col lg={12} xl={6} className="p-0">
            <img src="/graficas/co2.svg" />
          </Col>

          <Col lg={12} xl={6} className="p-0">
            <img src="/graficas/riskfire.svg" />
          </Col>

          <Col lg={12} xl={6} className="p-0">
            <img src="/graficas/digitalterrain.svg" />
          </Col>
        </Row>

        <Row>
          <ExtraData />
        </Row>
      </Container>
    </>
  );
};
