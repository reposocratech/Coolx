import axios from 'axios';
import React from 'react'
import { Row, Modal, Button} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import "./edittree.scss"

export const EditTree = ({showModal, setShowModal, editTree, setEditTree, setAllTrees}) => {

  const navigate = useNavigate();
  
  const handleClose = () => {
    setShowModal(false)
  }
  
  const handleChange = (e) => {
      console.log(e);
      const {name, value} = e.target;
      setEditTree({...editTree, [name] : value})
  }
  
  const handleSubmit = () => {
      axios
        .put(`http://localhost:4000/tree/editTree/${editTree.tree_id}`, editTree)

        .then(({res}) => {
          alert("Datos del arbol editados correctamente")
          console.log(res);
          setEditTree({...res})
          setShowModal(false)
          navigate("/admintree")
          

        })

        .catch((err) => {
          console.log(err);
        })
}

  return (
    <>
        <div className='wrapper'>
            <Row>
                <div className='form-edit-tree'>
                <h1>Formulario edicion de arbol</h1>
            </div>
            </Row>
      <Row>
        <div>
        <Modal show={showModal} onHide={handleClose} animation={false}>
        <Modal.Dialog>
        <Modal.Header closeButton>
        <Modal.Title>Edicion de arbol</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <div >
            <form className='d-flex flex-column'>

                <label>Nombre del arbol</label>
                <input
                    name='tree_name'
                    value={editTree.tree_name}
                    onChange={handleChange}

                />

                <label>Nombre en latin</label>
                <input
                    name='latin_name'
                    value={editTree.latin_name}
                    onChange={handleChange}
                   
                />

            </form>
        </div>
            </Modal.Body>

             <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>Cancelar</Button>
              <Button variant="primary" onClick={handleSubmit}>Guardar cambios</Button>
               </Modal.Footer>
              </Modal.Dialog>
              </Modal>
        </div>
        </Row>
            


        </div>
    </>
  )
}
