import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "./edituser.scss";

export const EditUser = ({ user, setUser }) => {
  const [editUser, setEditUser] = useState({
    name: "",
    surname: "",
    company: "",
    nif: "",
    position: "",
    phone: "",
    country: "",
    currency: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditUser({ ...editUser, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Container fluid className="editUser">
      <Row className="d-flex justify-content-center">
        <Col md={12} className="tituloEditUser">
          <div>
            <h1>Edición de usuario</h1>
          </div>
          <div className="iconEditUser d-flex align-items-center">
            <img src="/assets/icons/user.svg" />
            <p>Editar datos</p>
            <img src="/assets/icons/arrow_right.svg" />
          </div>
        </Col>

        <Col md={6} lg={4} className="contPpalEditUser">
          <Form.Group className="editUserForm">
            <Form className="d-flex flex-column">
              <Form.Label className="labels">Nombre</Form.Label>
              <Form.Control
                type="text"
                name="name"
                autoComplete="off"
                placeholder="Ej. Francisco"
                value={editUser.name}
                onChange={handleChange}
              />

              <Form.Label className="labels mt-3 mb-2">Apellidos</Form.Label>
              <Form.Control
                type="text"
                name="surname"
                autoComplete="off"
                placeholder="Ej. Benítez García"
                value={editUser.surname}
                onChange={handleChange}
              />

              <Form.Label className="labels mt-3 mb-2">Empresa</Form.Label>
              <Form.Control
                type="text"
                name="company"
                autoComplete="off"
                placeholder="Ej. Coolx"
                value={editUser.company}
                onChange={handleChange}
              />

              <Form.Label className="labels mt-3 mb-2">NIF/ CIF</Form.Label>
              <Form.Control
                type="text"
                name="nif"
                autoComplete="off"
                placeholder="Ej. 56089651 G"
                value={editUser.nif}
                onChange={handleChange}
              />

              <Form.Label className="labels mt-3 mb-2">
                Cargo dentro de la empresa
              </Form.Label>
              <Form.Control
                type="text"
                name="position"
                autoComplete="off"
                placeholder="Ej. CEO"
                value={editUser.position}
                onChange={handleChange}
              />

              <Form.Label className="labels mt-3 mb-2">Teléfono</Form.Label>
              <Form.Control
                type="text"
                name="phone"
                autoComplete="off"
                placeholder="Ej. +34 000 000 000"
                value={editUser.phone}
                onChange={handleChange}
              />
              <Form.Label className="labels mt-3 mb-2">País</Form.Label>
              <Form.Control
                type="text"
                name="country"
                autoComplete="off"
                placeholder="Ej. Benítez García"
                value={editUser.country}
                onChange={handleChange}
              />
              <Form.Label className="labels mt-3 mb-2">
                Moneda del usuario
              </Form.Label>
              <Form.Control
                type="text"
                name="currency"
                autoComplete="off"
                placeholder="Ej. €€€"
                value={editUser.currency}
                onChange={handleChange}
              />
            </Form>
          </Form.Group>

          <div className="divBotonEditUser">
            <Button className="button mt-3 mb-2" onClick={handleSubmit}>
              Enviar
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
