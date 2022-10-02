import React, { useState } from "react";
import { Container, Row, Col, Form, FloatingLabel } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./projectform.scss";
import axios from "axios";
import { Footer } from "../../pages/home/Footer";

export const ProjectForm = ({ user, setProjects, resetUser, setResetUser }) => {
  const [projectFiles, setProjectFiles] = useState();

  const [newProject, setNewProject] = useState({
    projectName: "",
    projectDescription: "",
    location: "",
    altitude: "",
    latitude: "",
    area: "",
    profit: "",
    projectCost: "",
    yearPlanting: "",
    user_id: user.user_id,
  });

  // console.log(user.user_id);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewProject({ ...newProject, [name]: value });
  };

  const handleFiles = (e) => {
    setProjectFiles(e.target.files);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newFormData = new FormData();

    newFormData.append("newProject", JSON.stringify(newProject));     

    if (projectFiles) {
      for (const elem of projectFiles) {
        newFormData.append("file", elem);
      }
    }

    axios
      .post(
        `http://localhost:4000/project/newProject/${user.user_id}`,   
        newFormData
      )

      .then((res) => {
        console.log(res);
        navigate("/succes2");
        // setResetUser(!resetUser);
      })

      .catch((err) => {
        console.log(err);
        // if (err.response.data.error.errno === 1062) {
        //   alert("El proyecto ya existe");
        // } else {
        //   navigate("/error");
        // }
      });
  };

  return (
    <>
      <div className="fondo-create">
        <Container fluid>
          <Row>
            <Col className="espacio-create">
              <div>
                <h1>Inserte los datos de su nuevo proyecto</h1>
              </div>
              <div className="create-icono">
                <img src="/assets/icons/permanence_solid.svg" />
                <p>Introduzca los datos</p>
                <img src="/assets/icons/arrow_right.svg" />
              </div>
            </Col>
          </Row>
          <Row>
            <div className="d-flex justify-content-center">
              <Col md={5} className="col-create">
                <Form.Group controlId="projectForm">
                  <Form className="projectForm d-flex flex-column">
                    <Form.Label className="labels">
                      Nombre del proyecto
                    </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Reforestación en Nicaragua"
                      name="projectName"
                      autoComplete="off"
                      value={newProject.projectName}
                      onChange={handleChange}
                    />

                    <Form.Label className="labels mt-3 mb-2">
                      Descripción del proyecto
                    </Form.Label>
                    <FloatingLabel controlId="projectForm" label="">
                      <Form.Control
                        className="textarea-form"
                        as="textarea"
                        name="projectDescription"
                        value={newProject.projectDescription}
                        onChange={handleChange}
                        style={{ height: "100px" }}
                      />
                    </FloatingLabel>

                    <Form.Label className="labels mt-3 mb-2">
                      Localización
                    </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Guatemala"
                      name="location"
                      autoComplete="off"
                      value={newProject.location}
                      onChange={handleChange}
                    />

                    <Form.Label className="labels mt-3 mb-2">
                      Altitud
                    </Form.Label>

                    <Form.Control
                      type="text"
                      placeholder="Ej. 36.694071"
                      name="altitude"
                      autoComplete="off"
                      value={newProject.altitude}
                      onChange={handleChange}
                    />

                    <Form.Label className="labels mt-3 mb-2">
                      Latitud
                    </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Ej.-4.4457159"
                      name="latitude"
                      autoComplete="off"
                      value={newProject.latitude}
                      onChange={handleChange}
                    />

                    <Form.Label className="labels mt-3 mb-2">
                      Area en hectareas del terreno{" "}
                    </Form.Label>
                    <Form.Control
                      type="number"
                      placeholder="5800"
                      name="area"
                      autoComplete="off"
                      value={newProject.area}
                      onChange={handleChange}
                    />

                    <Form.Label className="labels mt-3 mb-2">
                      Ganancias del proyecto
                    </Form.Label>
                    <Form.Control
                      type="number"
                      placeholder="86.000 euros"
                      name="profit"
                      autoComplete="off"
                      value={newProject.profit}
                      onChange={handleChange}
                    />

                    <Form.Label className="labels mt-3 mb-2">
                      Coste del proyecto
                    </Form.Label>
                    <Form.Control
                      type="number"
                      placeholder="Ej. 215.000 euros"
                      name="projectCost"
                      autoComplete="off"
                      value={newProject.projectCost}
                      onChange={handleChange}
                    />

                    <Form.Label className="labels mt-3 mb-2">
                      Año de plantación
                    </Form.Label>
                    <Form.Control
                      type="date"
                      placeholder="Ej. 1987"
                      name="yearPlanting"
                      autoComplete="off"
                      value={newProject.yearPlanting}
                      onChange={handleChange}
                    />
                    <Form.Label className="labels mt-3 mb-2">
                      Imagenes del proyecto
                    </Form.Label>
                    <Form.Control
                      type="file"
                      name="files"
                      multiple
                      onChange={handleFiles}
                    />
                  </Form>
                </Form.Group>
              </Col>
            </div>
          </Row>

          <Row>
            <div>
            <Col className="colocar-create">
              <button className="button" onClick={handleSubmit}>
                Crear proyecto
              </button>
            </Col>
          </div>
        </Row>

        <Row>
          <Col className="colocar-create">
            <button className="button" onClick={handleSubmit}>        
              Crear proyecto
            </button>
          </Col>
          </Row>
        </Container>
      </div>
      <Footer/>
    </>
  );
};