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