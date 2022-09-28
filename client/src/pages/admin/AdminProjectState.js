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

export const AdminProjectState = ({ setIsLogged }) => {
  const [allProjects, setAllProjects] = useState();
  const [resetProjects, setResetProjects] = useState(false);
  const [projectModal, setProjectModal] = useState();
  const [openModal, setOpenModal] = useState(false);
  const [modalState, setModalState] = useState(false);
  const [modalDelete, setModalDelete] = useState(false);

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

  console.log(allProjects);

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
                  <th>Estado</th>
                  <th>Borrar</th>
                  <th>Más información</th>
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
        />

        <AdminDeleteModal
          onHide={() => setModalDelete(false)}
          setModalDelete={setModalDelete}
          show={modalDelete}
          projectModal={projectModal}
          setResetProjects={setResetProjects}
          resetProjects={resetProjects}
        />
      </div>
    </div>
  );
};
