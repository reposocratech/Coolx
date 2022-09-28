import React, { useState, useEffect } from 'react'
import {Container, Col, Row, Button, Table} from "react-bootstrap"
import axios from "axios"
import { useNavigate } from 'react-router-dom';
import jwtDecode from "jwt-decode";
import "./admintree.scss"
import { TreeDeleteModal } from '../../components/modal/TreeDeleteModal';
import { TreeEditModal } from '../../components/modal/TreeEditModal';

export const AdminTree = ({setIsLogged}) => {

  const [allTrees, setAllTrees]  = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [editTree, setEditTree] = useState(false);
  const [resetAllTrees, setResetAllTrees] = useState(false);
  const [treeModal, setTreeModal] = useState();
  const [modalDeleteTree, setModalDeleteTree] = useState(false)
  const [modalEditTree, setModalEdiTree] = useState(false)

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
  }, [resetAllTrees]);


  const handleEditTree = (tree) => {
      setEditTree(tree)
      setModalEdiTree(true)
  }

  const handleDeleteTree = (tree) => {
      setTreeModal(tree);
      setModalDeleteTree(true);
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
            
            
            <Button onClick={()=> navigate("/treeform")} className="boton-register-tree">Registrar nuevo árbol</Button>
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
                  <th>Borrar</th>
                  <th>Editar</th>
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
                        <Button onClick={() => handleDeleteTree(tree)} className="boton-delete-tree">Eliminar</Button>
                      </td>
                      <td>
                        <Button onClick={() => handleEditTree(tree)} className="boton-edit-tree">Editar</Button>
                      </td>

                    </tr>
                  ))}
              </tbody>
            </Table>
           
          </Row>

          <TreeDeleteModal
            onHide={() => setModalDeleteTree(false)}
            setModalDeleteTree={setModalDeleteTree}
            showModal={modalDeleteTree}
            treeModal={treeModal}
            setResetAllTrees={setResetAllTrees}
            resetAllTrees={resetAllTrees}
          />

          <TreeEditModal 
            onHide={() => setModalEdiTree(false)}
            setModalEdiTree={setModalEdiTree}
            showModal={modalEditTree}
            modalEditTree={modalEditTree}
            setResetAllTrees={setResetAllTrees}
            resetAllTrees={resetAllTrees}
            editTree={editTree}
            setEditTree={setEditTree}  
          />
        </Container>

        </div>
    </>
  )
}
