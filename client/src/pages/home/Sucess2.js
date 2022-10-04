import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import "./errorpage.scss";

export const Succes2 = () => {
  const navigate = useNavigate();

  const { project_id } = useParams();

  // console.log("ergegegeg", typeof project_id);

  return (
    <div>
      <Container fluid className="fondo-error">
        <Row className="error">
          <Col className="columna pb-5">
            <div className="emoticono pb-5">
              <img src="./assets/active_on.svg" />
            </div>

            <h1 className="pb-2">Tu proyecto se ha registrado con éxito</h1>
            <h4 className="pb-5">
              Para observar el estado de tu proyecto y obtener todos los datos,
              registrate.
            </h4>
            <button
              className="button-error"
              onClick={() => navigate(`/project/${project_id}`)}
            >
              Acceder al proyecto
            </button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
