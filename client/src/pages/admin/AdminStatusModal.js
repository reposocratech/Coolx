import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import axios from "axios";

export const AdminStatusModal = ({ onHide, show, projectModal }) => {
  const [newState, setNewState] = useState({
    status: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("llega PM " + projectModal);
    // const { id } = projectModal.project_id;

    // axios
    //   .put(
    //     `http://localhost:4000/project/editProject/${projectModal.project_id}`,
    //     newState
    //   )
    //   .then((res) => {
    //     console.log(res);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  };

  return (
    <Modal show={show} animation={false}>
      <Modal.Header>
        <Modal.Title>Cambiar estado del proyecto</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h5>Proyecto: {projectModal && projectModal.project_name}</h5>
        <br />
        <h5>
          Estado actual:
          {projectModal && (
            <b>
              {projectModal.status === 0
                ? "Registrado"
                : projectModal.status === 1
                ? "Calculando"
                : "Completado"}
            </b>
          )}
        </h5>
        <Form.Select size="sm" defaultValue="3">
          <option value="1">Registrado</option>
          <option value="2">Calculando</option>
          <option value="3">Completado</option>
        </Form.Select>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Cerrar
        </Button>
        <Button variant="primary" onClick={handleSubmit}>
          Guardar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
