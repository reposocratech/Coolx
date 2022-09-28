import React, { useState, useEffect } from 'react'
import {Container, Col, Row, Button, Table} from "react-bootstrap"
import axios from "axios"
import { useNavigate } from 'react-router-dom';
import jwtDecode from "jwt-decode";
import "./admintree.scss"
import { EditTree } from './EditTree';

export const AdminTree = ({setIsLogged}) => {

  const [allTrees, setAllTrees]  = useState([]);

  const [showModal, setShowModal] = useState(false);

  const [editTree, setEditTree] = useState(false);

  const navigate = useNavigate()

  
 
  useEffect(() => {
    const token = window.localStorage.getItem("infocoolx");

    if (token) {
      setIsLogged(true);

      const { id, type } = jwtDecode(token).user;

      if (type === 1) {
        axios
          .get(`http://localhost:4000/admin/${id}/allTrees`)
          .then((res) => {
            console.log(res);
            setAllTrees(res.data);
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
  }, []);


  const deleteTree = (tree_id) => {
      axios
          .delete(`http://localhost:4000/tree/deleteTree/${tree_id}`)

          .then((res) => {
            alert("Arbol eliminado correctamente")
            console.log(res);
            navigate("/admintree")
          })

          .catch((err) => {
            console.log(err);
          })      
  }

  const handleEditTree = (tree) => {
      setEditTree({...tree})
      setShowModal(true)
  }


  return (
    <>
        <div className="wrapper">
      <Container fluid>
        <Row>
          <Col className="admin-tree-title">

            <div className='admin-title'>
              <Button onClick={() => navigate(-1)}><img src='/assets/icons/arrow_left.svg'/></Button>
              <h1>Listado de arboles</h1>
            </div>
            
            
            <Button onClick={()=> navigate("/treeform")}>Registrar nuevo árbol</Button>
          </Col>
          
        </Row>

        <Row className='table-all-trees'>
        
        
       
            <Table striped>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Id</th>
                  <th>Nombre del árbol</th>
                  <th>Nombre en latín</th>
                  <th>Opcion a</th>
                  <th>Opcion a</th>
                 
                  
                </tr>
              </thead>

              <tbody>
                {allTrees &&
                  allTrees.map((tree, index) => (

                    <tr key={tree.tree_id}>
                      <td>{index + 1}</td>
                      <td>{tree.tree_id}</td>
                      <td>{tree.tree_name}</td>
                      <td>{tree.latin_name}</td>
                      <td>
                        <Button onClick={() => deleteTree(tree.tree_id)}>Eliminar</Button>
                      </td>
                      <td>
                        <Button onClick={() => handleEditTree(tree)}>Editar</Button>
                      </td>

                     
                    </tr>
                  ))}
              </tbody>
            </Table>
          
           
          </Row>
          <div className='modalEditTree'>
             { showModal &&
            <EditTree
             showModal = {showModal}
             setShowModal={setShowModal}
             editTree ={editTree}
             setEditTree= {setEditTree}
             setAllTrees={setAllTrees}
             
          />}
          </div>

        
          
         
        
        </Container>

        </div>
    </>
  )
}
