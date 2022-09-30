import axios from "axios";
import jwtDecode from "jwt-decode";
import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";        
import { useNavigate } from "react-router-dom";
import "./adminProjectState.scss";
import Table from "react-bootstrap/Table";
import { AdminProjectModal } from "./AdminProjectModal";
import { AdminStatusModal } from "./AdminStatusModal";
import { AdminDeleteModal } from "./AdminDeleteModal";
import { AdminCompany } from "./AdminCompany";

export const AdminProjectState = ({ setIsLogged, user }) => {
  const [allProjects, setAllProjects] = useState();
  const [resetProjects, setResetProjects] = useState(false);
  const [projectModal, setProjectModal] = useState();
  const [openModal, setOpenModal] = useState(false);
  const [modalState, setModalState] = useState(false);
  const [modalDelete, setModalDelete] = useState(false);
  const [modalBuyer, setModalBuyer] = useState(false);
  const [allUsers, setAllUsers] = useState();


  const navigate = useNavigate();

  useEffect(() => {
    const token = window.localStorage.getItem("infocoolx");

    if (token) {
      setIsLogged(true);

      const { id, type } = jwtDecode(token).user;

      if (type === 1) {
        axios
          .get(`http://localhost:4000/admin/${id}/allProjects`)       
          .then((res) => {
            // console.log(res);
            setAllProjects(res.data);
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        alert("No tienes permiso de administrador");
      }
    } else {
      alert("Debes iniciar sección como administrador");
    }
  }, [resetProjects]);

  useEffect(() => {
    const AUTH_TOKEN = window.localStorage.getItem("token");
    axios.defaults.headers.common["authorization"] = `Bearer ${AUTH_TOKEN}`;

    axios
      .get(`http://localhost:4000/admin/${user.user_id}/allUsers`)    

      .then((res) => {
        setAllUsers(res.data);
        console.log(res);
      })

      .catch((err) => {console.log(err)});
  }, []);

  console.log(allUsers);

  // console.log(allProjects);

  const handleModal = (project) => {
    setProjectModal(project);
    setOpenModal(true);
  };

  const handleStateModal = (project) => {
    setProjectModal(project);
    setModalState(true);
  };

  const handleDeleteModal = (project) => {
    setProjectModal(project);
    setModalDelete(true);
  };

  const handleCompany = (project) => {
    setProjectModal(project);
    setModalBuyer(true);

  };

  return (
    <div className="wrapper">
      <div className="getdown">
        <Container fluid>
          <Row>
            <Col className="adm-proj-state-header">
              <Button onClick={() => navigate(-1)}>
                <img src="./assets/icons/arrow_left.svg" />
              </Button>
              <h1>Estado de proyectos</h1>
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
                  <th>Id Usuario</th>
                  <th>Estado</th>
                  <th>Borrar</th>
                  <th>Más información</th>
                  <th>Asignar proyecto a las empresas</th>
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
                      <td>{project.user_id}</td>
                      <td>
                        <div className="status-col">
                          <p>
                            {project.status === 0
                              ? "Registrado"
                              : project.status === 1
                              ? "Calculando"
                              : "Completado"}
                          </p>
                          <Button
                            type="button"
                            className="pen-status"
                            onClick={() => handleStateModal(project)} 
                          >
                            <img
                              src="/assets/icons/pen.svg"
                              alt="Edit project state"
                            />

                          </Button>
                        </div>
                      </td>
                      <td>
                        <Button
                          type="button"
                          onClick={() => handleDeleteModal(project)}  
                        >
                          Eliminar
                        </Button>
                      </td>
                      <td>
                        <Button
                          type="button"
                          onClick={() => handleModal(project)}        
                        >
                          Más info
                        </Button>
                      </td>
                      <td>
                        <Button
                          type="button"
                          onClick={() => handleCompany(project)}      
                        >
                          Asignar empresa
                        </Button>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </Table>
          </Row>
        </Container>

        <AdminProjectModal
          onHide={() => setOpenModal(false)}
          show={openModal}
          projectModal={projectModal}
        />

        <AdminStatusModal
          onHide={() => setModalState(false)}
          show={modalState}
          projectModal={projectModal}
          setModalState={setModalState}
          setResetProjects={setResetProjects}
          resetProjects={resetProjects}
        />

        <AdminDeleteModal
          onHide={() => setModalDelete(false)}
          setModalDelete={setModalDelete}
          show={modalDelete}
          projectModal={projectModal}
          setResetProjects={setResetProjects}
          resetProjects={resetProjects}
        />

        <AdminCompany
          onHide={() => setModalBuyer(false)}
          show={modalBuyer}
          setModalBuyer={setModalBuyer}
          allUsers={allUsers}
          projectModal={projectModal}
          setResetProjects={setResetProjects}
          resetProjects={resetProjects}

        />

      </div>
    </div>
  );
};