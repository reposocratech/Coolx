import React, { useState } from "react";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Modal from "react-bootstrap/Modal";
import Row from "react-bootstrap/Row";
import { useNavigate } from "react-router-dom";
import Table from "react-bootstrap/Table";
import axios from "axios";


export const AdminCompany = ({ onHide, show, allUsers, projectModal, resetProjects, setResetProjects, setModalBuyer }) => {

    const handleCompany = (usuario, projectModal) => {
        console.log(projectModal.project_id)
        console.log(usuario.user_id)

    axios
      .put(`http://localhost:4000/project/changeUser/${projectModal.project_id}/${usuario.user_id}`)

      .then((res) => {
        // console.log(res);
        setResetProjects(!resetProjects);
        setModalBuyer(false);


      })

      .catch((err) => {console.log(err)});
    }


  return (
    <Modal show={show} aria-labelledby="contained-modal-title-vcenter">
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">
          {"Empresas"}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="show-grid">
        <Container>
        <Row>
            <Table striped>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Empresa</th>
                </tr>
              </thead>

              <tbody>
                {allUsers &&
                  allUsers.map((usuario, index) => (
                    <tr key={usuario.user_id}>
                      <td>{index + 1}</td>
                      <td>{usuario.company}</td>
                      <td>
                        <Button onClick={()=> {
                            handleCompany(usuario, projectModal)      
                        }
                        }>Asignar empresa</Button>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </Table>
          </Row>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};
(END)

import React, { useState } from "react";
import {
import {
  Container,Row,
  Col,
  Form,
  FloatingLabel,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./projectform.scss";
import axios from "axios";

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
    user_id: user.user_id
  });

  // console.log(user.user_id);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewProject({ ...newProject, [name]: value });

  };

  const handleFiles = (e) => {
    setProjectFiles(e.target.files);

  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const newFormData = new FormData();

    newFormData.append("newProject", JSON.stringify(newProject));     

    if(projectFiles){
      for(const elem of projectFiles){
          newFormData.append("file", elem)
          }
      }

    axios
      .post(
        `http://localhost:4000/project/newProject/${user.user_id}`,   
        newFormData,
      )

      .then((res) => {
        console.log(res);
        navigate("/succes2");
        setResetUser(!resetUser);

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

                  <Form.Label className="labels mt-3 mb-2">Altitud</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Ej. 36.694071"
                    name="altitude"
                    autoComplete="off"
                    value={newProject.altitude}
                    onChange={handleChange}
                  />

                  <Form.Label className="labels mt-3 mb-2">Latitud</Form.Label>
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
          <Col className="colocar-create">
            <button className="button" onClick={handleSubmit}>        
              Crear proyecto
            </button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
(END)


(END)


(END)

import React from 'react'
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Modal from "react-bootstrap/Modal";
import Row from "react-bootstrap/Row";
import { useNavigate } from 'react-router-dom';

export const BuyModal = ({onHide, show, setModalBuy}) => {

const handleClick = () => {
    navigate("/projectform");
}

const handleClick2 = () => {
    navigate("/buyproject");
}

const navigate = useNavigate();

    return (
        <Modal show={show} aria-labelledby="contained-modal-title-vcenter">
          <Modal.Header>
            <Modal.Title id="contained-modal-title-vcenter">
              <p> ¿Prefieres subir tu propio proyecto o comprarlo</p> 
            </Modal.Title>
          </Modal.Header>
          <Modal.Body className="show-grid">
            <Container>
             <Row>
                <Col>
                <Button
                    type="button"
                    onClick={handleClick}
                >Subir mi proyecto
                </Button>

                <Button
                    type="button"
                    onClick={handleClick2}

                >Comprar un proyecto
                </Button>

                </Col>
             </Row>
            </Container>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={onHide}>Close</Button>
          </Modal.Footer>
        </Modal>
      );
    };
(END)


(END)


(END)

import React, { useEffect, useState } from 'react'
import { Container, Row, Col, Button } from "react-bootstrap";        
import { useNavigate } from 'react-router-dom';
import Table from "react-bootstrap/Table";
import axios from 'axios'


export const BuyProject = ({user}) => {

  const navigate = useNavigate();

  const [allProjects, setAllProjects] = useState();

  const [reset, setReset] = useState(false);

  const handleBuy = (project) => {
    axios
      .put(`http://localhost:4000/project/changeUser/${project.project_id}/${user.user_id}`)
      .then((res) => {
        console.log(res.data);
        setReset(!reset);
      })
      .catch((err)=>{
        console.log(err);
      })
  }



  useEffect(() => {
    axios
      .post("http://localhost:4000/project/onlyAdmin")

      .then((res) => {
        setAllProjects(res.data);
        console.log(res);
      })

      .catch((err)=>{
        console.log(err);
      })

  },[reset]);




  return (
    <div className="wrapper">
      <div className="getdown">
        <Container fluid>
          <Row>
            <Col className="adm-proj-state-header">
              <Button onClick={() => navigate(-1)}>
                <img src="./assets/icons/arrow_left.svg" />
              </Button>
              <h1>Proyectos disponibles</h1>
            </Col>
          </Row>

          <Row>
            <Table striped>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Id</th>
                  <th>Nombre</th>
                  <th>Lugar</th>
                  <th>Comprar proyecto</th>
                </tr>
              </thead>

              <tbody className="list-text">
                {allProjects &&
                  allProjects.map((project, index) => (
                    <tr key={project.project_id}>
                      <td>{index + 1}</td>
                      <td>{project.project_id}</td>
                      <td>{project.project_name}</td>
                      <td>{project.location}</td>
                      <td>
                        <Button
                        onClick={()=>handleBuy(project)}
                        >
                          Comprar este proyecto
                        </Button>
                      </td>
                    </tr>

                  ))}
              </tbody>
            </Table>
          </Row>
        </Container>

      </div>
    </div>
  );
};
(END)







