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
import { AdminEditModal } from "./AdminEditModal";
import { Footer } from "../home/Footer";

export const AdminProjectState = ({ setIsLogged, user }) => {
  const [allProjects, setAllProjects] = useState();
  const [resetProjects, setResetProjects] = useState(false);
  const [projectModal, setProjectModal] = useState();
  const [openModal, setOpenModal] = useState(false);
  const [modalState, setModalState] = useState(false);
  const [modalDelete, setModalDelete] = useState(false);
  const [modalBuyer, setModalBuyer] = useState(false);
  const [allUsers, setAllUsers] = useState();

  const [modalEdit, setModalEdit] = useState(false);

  const [tablaBusqueda, setTablaBusqueda] = useState([]);
  const [busqueda, setBusqueda] = useState("");
  const [orderProjects, setOrderProjects] = useState();

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
            setTablaBusqueda(res.data);
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

      .catch((err) => {
        console.log(err);
      });
  }, []);

  console.log(allUsers);

  // console.log(allProjects.length);

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

  const handleEditModal = (project) => {
    setProjectModal(project);
    setModalEdit(true);
  };

  const handleChange = (e) => {
    setBusqueda(e.target.value);
    filtrar(e.target.value);
  };

  const filtrar = (terminoBusqueda) => {
    let resBusqueda = tablaBusqueda.filter((elemento) => {
      if (
        elemento.project_name
          .toString()
          .toLowerCase()
          .includes(terminoBusqueda.toLowerCase())
      ) {
        return elemento;
      }
    });
    setAllProjects(resBusqueda);
  };

  const handleOrderName = () => {
    const sortedList = [...allProjects].sort((a, b) =>
      a.project_name.toString().toLowerCase() >
      b.project_name.toString().toLowerCase()
        ? 1
        : a.project_name.toString().toLowerCase() <
          b.project_name.toString().toLowerCase()
        ? -1
        : 0
    );

    console.log(sortedList);
    setAllProjects(sortedList);
  };

  const handleOrderId = () => {
    const sortedListId = [...allProjects].sort((a, b) =>
      Number(a.project_i) > Number(b.project_id)
        ? 1
        : Number(a.project_id) < Number(b.project_id)
        ? -1
        : 0
    );

    console.log(sortedListId);
    setAllProjects(sortedListId);
  };

  const handleOrderLocal = () => {
    const sortedListLocal = [...allProjects].sort((a, b) =>
      a.location.toString().toLowerCase() > b.location.toString().toLowerCase()
        ? 1
        : a.location.toString().toLowerCase() <
          b.location.toString().toLowerCase()
        ? -1
        : 0
    );

    setAllProjects(sortedListLocal);
  };

  const handleOrderStatus = () => {
    const sortedListStatus = [...allProjects].sort((a, b) =>
      a.status > b.status ? "registrado" : a.status < b.status ? -1 : 0
    );

    setAllProjects(sortedListStatus);
    console.log(sortedListStatus);
  };

  return (
    <>
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
              <Col>
                <input
                  className="form-control inputBuscar "
                  type="text"
                  placeholder="Buscar empresa"
                  value={busqueda}
                  onChange={handleChange}

                  
                  />
            
            </Col>
          </Row>

          <Row className="m-0 mt-3">
            <Table striped >
              <thead className="table-projects">
                <tr>
                
             
                  <th>Id <button onClick={handleOrderId}><img src="/assets/icons/arrow_white.svg"/></button></th>
                  <th>Nombre <button onClick={handleOrderName}><img src="/assets/icons/arrow_white.svg"/></button></th>
                  <th>Localización <button onClick={handleOrderLocal}><img src="/assets/icons/arrow_white.svg"/></button></th>
                   <th>Id Usuario</th>
                  <th>Estado <button onClick={handleOrderStatus}><img src="/assets/icons/arrow_white.svg"/></button></th>
                  <th>Borrar</th>
                  <th>Más información</th>
                  <th>Editar</th>
                  <th>Asignar proyecto a las empresas</th>
                </tr>
              </thead>
              <tbody className="list-text">
                {allProjects &&
                  allProjects.map((project, index) => (

                    <tr key={project.project_id}>
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
                          <div>
                            <Button
                              type="button" 
                              className="delete-project"
                              onClick={() => handleDeleteModal(project)}
                            >
                              Eliminar
                            </Button>
                          </div>
                        </td>

                        <td>
                          <Button
                            type="button"
                            onClick={() => handleDeleteModal(project)}
                          >
                            Más info
                          </Button>

                        </div>
                      </td>
                
                      <td>
                      <Button
                          type="button"
                          className="info-project"
                          onClick={() => handleModal(project)}
                        >
                          Más info
                        </Button>
                      </td>

                      <td>
                        <Button
                          type="button"
                          className="edit-project"
                          onClick={() => handleEditModal(project)}
                        >
                          Editar
                        </Button>
                      </td>
                      <td>
                        <Button
                          type="button"
                          className="assign-project"
                          onClick={() => handleCompany(project)}      
                        >
                          Asignar empresa
                        </Button>
                      </td>
                    </tr>
                  ))}
              </tbody>
              
            </Table>
            {/* <h5>Cantidad de proyectos: {allProjects.length}</h5> */}
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
        <AdminEditModal 
          onHide={() => setModalEdit(false)}
          setModalEdit={setModalEdit}
          show={modalEdit}
          projectModal={projectModal}
          setResetProjects={setResetProjects}
          resetProjects={resetProjects}
          setProjectModal={setProjectModal}
        
        />  

        </div>
      </div>
      <Footer />
    </>
  );
};
