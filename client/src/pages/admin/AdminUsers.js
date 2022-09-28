import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Col, Container, Row, Button } from "react-bootstrap";
import './allusers.scss'
import Table from "react-bootstrap/Table";

export const AdminUsers = ({user,resetUser, setResetUser}) => {

  const navigate = useNavigate();

  const [allUsers, setAllUsers] = useState();

  useEffect(() => {
    const AUTH_TOKEN = window.localStorage.getItem("token");
    axios.defaults.headers.common["authorization"] = `Bearer ${AUTH_TOKEN}`;

    axios
      .get(`http://localhost:4000/admin/${user.user_id}/allUsers`)

      .then((res) => {
        setAllUsers(res.data);
        console.log(res);
      })

      
      .catch((err) => console.log(err));
  }, []);

  console.log(allUsers);

  const eliminarUser = (e) => {
    
    axios
    .delete(`http://localhost:4000/users/deleteUser/${e}`)

    .then((res) => {
      setResetUser(!resetUser);
      console.log(res, "soyyyy eliminar");
    })

    .catch((err) => {
      console.log(err);
    });
  }

  return (
    <div className="wrapper">
      <div className="getdown">
        <Container fluid>
          <Row>
            <Col className="adm-proj-state-header">
              <Button onClick={() => navigate(-1)}>
                <img src="./assets/icons/arrow_left.svg" />
              </Button>
              <h1>Todas nuestras empresas</h1>
            </Col>
          </Row>

          <Row>
            <Table striped>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Empresa</th>
                  <th>NIF</th>
                  <th>País</th>
                  <th>Teléfono</th>
                  <th>Email</th>
                  <th>Eliminar usuario</th>
                  <th>Mas información</th>
                </tr>
              </thead>

              <tbody>
                {allUsers && 
                  allUsers.map((usuario, index) => (
                    <tr key={usuario.user_id}>
                      <td>{index + 1}</td>
                      <td>{usuario.company}</td>
                      <td>{usuario.nif}</td>
                      <td>{usuario.country}</td>
                      <td>{usuario.phone}</td>
                      <td>{usuario.email}</td>
                      <td>
                        <Button onClick={() => {eliminarUser(usuario.user_id)}} >Eliminar</Button>
                      </td>
                      <td>
                        <Button>Más info</Button>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </Table>
          </Row>
          <Row>
            <Col>
              <p>
                *Estado 0: Registrado - Estado 1: Calculando - Estado 2:
                Completado
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}