import React from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useNavigate } from "react-router-dom";

export const UserDeleteModal = ({ sendInfo, show, onHide }) => {
  const navigate = useNavigate();

  const deleteUser = (id) => {
    axios
      .delete(`http://localhost:4000/users/deleteUser/${id}`)

      .then((res) => {
        // alert("Usuario eliminado correctamente");
        navigate("/adminusers");
        // setIsLogged(true);
      })

      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Modal show={show} animation={false}>
      <Modal.Header>
        <Modal.Title>Eliminar un usuario</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h5>
          ¿Estás seguro que quieres eliminar al usuario{" "}
          <b>{sendInfo && sendInfo.user_name}</b>?
        </h5>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Cancelar
        </Button>
        <Button variant="primary" onClick={() => deleteUser(sendInfo.user_id)}>
          Eliminar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
