import React, { useState } from 'react'
import {Container, Col, Row, Form, Button} from "react-bootstrap"
import axios from "axios"
import { useNavigate } from 'react-router-dom';
import "./treeform.scss"

export const TreeForm = () => {
    const [newTree, setNewTree] = useState({
        tree_name:"" ,
        latin_name:"",
        avg_height_tree:"",
        avg_crown_area:"",
        avg_biomass:"",
        avg_age:"",
      
     });
 
     const navigate = useNavigate();
 
     const handleChange = (e) => {
         const {name, value} = e.target;
         setNewTree({...newTree, [name]: value})
     };
     
     const handleSubmit = (e) => {
         e.preventDefault();
 
         axios
             .post("http://localhost:4000/tree/createTree", newTree)
 
             .then((res) => {
                 console.log(res);
                 alert("Datos registrados correctamente")
                 navigate("/admintree")
 
             })
             .error((err) => {
                 console.log(err, "ESTE ES EL ERROR AXIOS");
             })
     }

  return (
    <>
    <div className="formCreateTree">
      <Container fluid>
        <Row>
          <Col className="header-create-tree">

            <div className='title-and-back'>
                <Button onClick={()=> navigate(-1)}><img src="./assets/icons/arrow_left.svg" /></Button>
              
              <h1>Datos del árbol</h1>
            </div>

            <div className="create-icono-tree">
              <img src="./assets/icons/tree_solid.svg" />
              <p>Introduzca los datos</p>
              <img src="./assets/icons/arrow_right.svg" />
            </div>

        
          </Col>
        </Row>
        <Row>
          <div className="d-flex justify-content-center pt-5">
            <Col md={5} >
              
              <Form.Group >
                <Form className="formTree d-flex flex-column">
                  <Form.Label className="labels">
                    Nombre del árbol
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Roble"
                    name="tree_name"
                    autoComplete="off"
                    value={newTree.tree_name}
                    onChange={handleChange}
                  />


                  <Form.Label className="labels mt-3 mb-2">
                   Nombre en Latín
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Quercus"
                    name="latin_name"
                    autoComplete="off"
                    value= {newTree.latin_name}
                    onChange={handleChange}
                  />


                  <Form.Label className="labels mt-3 mb-2">
                    Altura media
                    </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Ej. 40m"
                    name="avg_height_tree"
                    autoComplete="off"
                    value={newTree.avg_height_tree}
                    onChange={handleChange}
                  />

                  <Form.Label className="labels mt-3 mb-2">
                    Área de copa media
                    </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Ej. 50m"
                    name="avg_crown_area"
                    autoComplete="off"
                    value={newTree.avg_crown_area}
                    onChange={handleChange}
                  />

                  <Form.Label className="labels mt-3 mb-2">
                    Biomasa promedio
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="6.03m"
                    name="avg_biomass"
                    autoComplete="off"
                    value={newTree.avg_biomass}
                    onChange={handleChange}
                  />

                
                  <Form.Label className="labels mt-3 mb-2">
                    Edad media
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Ej. 100 años"
                    name="avg_age"
                    autoComplete="off"
                    value={newTree.avg_age}
                    onChange={handleChange}
                  />
                </Form>
              </Form.Group>
            </Col>
          </div>
        </Row>

        <Row>
          <Col className="contenedor-boton-tree">
            <button className="button-send" onClick={handleSubmit}>
              Guardar datos
            </button>
          </Col>
        </Row>
      </Container>
    </div>
    
    </>
  )
}
