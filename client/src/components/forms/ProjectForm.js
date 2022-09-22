import React, {useState} from 'react'
import { Container, Row,  Col, Button, Form, FloatingLabel} from "react-bootstrap";
import './projectform.scss'

export const ProjectForm = () => {
    const [project, setProject] = useState({
      projectName: "",
      projectDescription: "",
      location: "",
      altitude: "",
      latitude: "",
      area: "",
      profit: "",
      projectCost: "",
      yearPlanting:"",
      
    });
  
    const handleChange = (e) => {
      const { name, value } = e.target;
  
      setProject({ ...project, [name]: value });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
    };
  
    return (
      <div className="fondo-create">

        <Container fluid >
          <Row>
            <Col className='espacio'>
                <div>
                  <h1>Inserte los datos de su nuevo proyecto</h1>
                </div>
                <div className='create-icono'>
                  <img src='./assets/icons/permanence_solid.svg'/>
                  <p>Introduzca los datos</p>
                  <img src=''/>
                </div>
                </Col>

          </Row>
          <Row>
            
            <div className="d-flex justify-content-center pt-5">
                
            <Col md={5} className="col">

  
              <Form.Group controlId="projectForm">
                <Form className="projectForm d-flex flex-column">

                <Form.Label className="labels">Nombre del proyecto</Form.Label>
                <Form.Control
                  type="text"
                  placeholder='Reforestación en Nicaragua'
                  name="projectName"
                  autoComplete="off"
                  value={project.projectName}
                  onChange={handleChange}
                  />

                <Form.Label className="labels mt-3 mb-2">Descripción del proyecto</Form.Label>
                <FloatingLabel controlId="projectForm" label="">
                <Form.Control
                  type='text'
                  name="projectDescription"
                  value={project.projectDescription}
                  onChange={handleChange}
                  style={{ height: "100px" }}
                  />

                </FloatingLabel>
  
                <Form.Label className="labels mt-3 mb-2">Localización</Form.Label>
                <Form.Control
                  type="text"
                  placeholder='Guatemala'
                  name="projectDescription"
                  autoComplete="off"
                  value={project.location}
                  onChange={handleChange}
                  />

                <Form.Label className="labels mt-3 mb-2">Altitud</Form.Label>
                <Form.Control
                  type="text"
                  placeholder='Ej. 36.694071'
                  name="altitude"
                  autoComplete="off"
                  value={project.altitude}
                  onChange={handleChange}
                  />

                <Form.Label className="labels mt-3 mb-2">Latitud</Form.Label>
                <Form.Control
                  type="text"
                  placeholder='Ej.-4.4457159'
                  name="latitude"
                  autoComplete="off"
                  value={project.latitude}
                  onChange={handleChange}
                  />

                <Form.Label className="labels mt-3 mb-2">Area en hectareas del terreno </Form.Label>
                <Form.Control
                  type="text"
                  placeholder='5800 hectareas '
                  name="area"
                  autoComplete="off"
                  value={project.area}
                  onChange={handleChange}
                  />

                <Form.Label className="labels mt-3 mb-2">Ganancias del proyecto</Form.Label>
                <Form.Control
                  type="text"
                  placeholder='86.000 euros'
                  name="profit"
                  autoComplete="off"
                  value={project.profit}
                  onChange={handleChange}
                  />
  
                  <Form.Label className="labels mt-3 mb-2">Coste del proyecto</Form.Label>
                  <Form.Control
                  type="text"
                  placeholder='Ej. 215.000 euros'
                  name="projectCost"
                  autoComplete="off"
                  value={project.projectCost}
                  onChange={handleChange}
                  />

                  <Form.Label className="labels mt-3 mb-2">Año de plantación</Form.Label>
                  <Form.Control
                  type="numb"
                  placeholder='Ej. 1987'
                  name="yearPlanting"
                  autoComplete="off"
                  value={project.yearPlanting}
                  onChange={handleChange}
                  />

                  </Form>
                </Form.Group>
              </Col>
            </div>
          </Row>

          <Row>
            <Col className='colocar'>
                <button className="button" onClick={handleSubmit}>
                        Crear proyecto
                </button>
            </Col>
          </Row>
        </Container>
      </div>
    );
  };
  