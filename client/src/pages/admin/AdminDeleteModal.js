import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import axios from "axios";

export const AdminDeleteModal = ({
  setModalDelete,
  onHide,
  show,
  projectModal,
  resetProjects,
  setResetProjects,
}) => {
  const handleSubmit = (id) => {
    // console.log("id= " + id);
    axios
      .delete(`http://localhost:4000/project/deleteProject/${id}`)
      .then((res) => {
        // console.log(res);
        setResetProjects(!resetProjects);
        setModalDelete(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Modal show={show} animation={false}>
      <Modal.Header>
        <Modal.Title>Eliminar un proyecto</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h5>
          ¿Estás seguro que quieres eliminar el proyecto{" "}
          <b>{projectModal && projectModal.project_name}</b>?
        </h5>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Cancelar
        </Button>
        <Button
          variant="primary"
          onClick={() => handleSubmit(projectModal.project_id)}
        >
          Eliminar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};