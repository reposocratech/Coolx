import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import { Card, Col, Container, Row, Button } from "react-bootstrap";

export const AdminAllTrees = ({user}) => {

  const navigate = useNavigate();

  const [allTrees, setAllTrees] = useState();

  const deleteTree = () => {};

  useEffect(() => {
    const AUTH_TOKEN = window.localStorage.getItem("token");
    axios.defaults.headers.common["authorization"] = `Bearer ${AUTH_TOKEN}`;

    axios
      .get(`http://localhost:4000/admin/${user.user_id}/allTrees`)
      .then((res) => {
        setAllTrees(res.data);
        console.log(res);
      })
      .catch((err) => console.log(err));
  }, []);

  console.log(allTrees);


  return (
    <div className="wrapper">
    <div className="getdown">
    <h1> Todos los arboles registrados</h1>
      {allTrees &&
        allTrees.map((tree, ind) => {
          return (
            <Container fluid key={tree.tree_id}>
              <Row className="users-card-container ">

                <Col lg={7} className="card-information">
                  <Row>
                    <Col className="u-card-title">
                      <h4>{tree.tree_name}</h4>
                    </Col>
                  </Row>

                  <Row>
                    <Col lg={12} className="u-card-text">
                      <img src="/assets/icons/location.svg" />

                      <p>
                        <b>{tree.avg_height_tree}</b>
                      </p>
                    </Col>

                    <Col lg={12} className="u-card-text">
                      <img src="/assets/icons/area.svg" />

                      <p>
                        <b>{tree.avg_crown_area}</b>, área del terreno
                      </p>
                    </Col>
                  </Row>

                  <Row className="u-card-profit">
                    <Col lg={2} className="p-0 ">
                      <img
                        className="users-pic"
                        src="/assets/icons/money.svg"
                      />
                    </Col>

                    <Col lg={10} className="u-0 d-flex align-items-end">
                      <div>
                        <p>Ganacias consultora</p>
                        <h4>{tree.age} $</h4>
                      </div>
                    </Col>
                  </Row>

                  <Row>
                    <Col>
                      <Button
                        className="u-card-button"
                        onClick={()=> navigate("/")}
                      >
                        Ver más
                      </Button>
                      <Button
                        className="u-card-button"
                        onClick={() => deleteTree()}
                      >
                        Eliminar usuario
                      </Button>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
          );
        })}
    </div>
   </div>
  )
}
