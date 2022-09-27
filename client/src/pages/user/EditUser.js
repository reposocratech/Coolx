import React, { useEffect, useState} from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import "./edituser.scss"
import axios from 'axios'
import {useNavigate} from "react-router-dom"


export const EditUser = ({user, setUser}) => {

    const [editUser, setEditUser] = useState({
        user_name:"",
        surname:"",
        company:"",
        nif:"",
        position:"",
        phone:"",
        country:"",
        currency:""
    })

    const navigate = useNavigate();

  
    const handleChange = (e) => {
        const {name, value} = e.target;
        setEditUser({...editUser, [name] : value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        axios
              .put(`http://localhost:4000/users/editUser/${user.user_id}`, {register: {...editUser}})

              .then(({data})=> {
                setEditUser({...data})
                setUser({...data})
                navigate("/user")
              })

              .catch((err) => {
                console.log(err);
              })
    }

    useEffect(() => {
      setEditUser({...editUser, ...user})
    }, [])
    


  return (
    <>
        <div className='contEditUser'>
            <Container fluid>
                <Row className="d-flex justify-content-center">
                    <Col md ={12} className="tituloEditUser">

                        <div className='titleEdit'>
                          <Button onClick={()=>navigate(-1)}><img src="/assets/icons/arrow_left.svg"/></Button>
                          
                            <h1>Edición de usuario</h1>
                        </div>

                        <div className='iconEditUser d-flex align-items-center'>
                            <img src='/assets/icons/user.svg' />
                            <p>Editar datos</p>
                            <img src='/assets/icons/arrow_right.svg'/>
                        </div>
                    </Col>


                    <Col md={6} lg={4} className="contPpalEditUser">
                
                    <Form.Group className='editUserForm'>
                    <Form className="d-flex flex-column">
                      <Form.Label className="labels">Nombre</Form.Label>
                      <Form.Control
                        type="text"
                        name="user_name"
                        autoComplete="off"
                        value={editUser.user_name}
                        onChange={handleChange}

                      />

                      <Form.Label className="labels mt-3 mb-2">Apellidos</Form.Label>
                      <Form.Control
                        type="text"
                        name="surname"
                        autoComplete="off"
                        value={editUser.surname}
                        onChange={handleChange}


                      />

                      <Form.Label className="labels mt-3 mb-2">Empresa</Form.Label>
                      <Form.Control
                        type="text"
                        name="company"
                        autoComplete="off"
                        value={editUser.company}
                        onChange={handleChange}


                      />

                        <Form.Label className="labels mt-3 mb-2">NIF/ CIF</Form.Label>
                      <Form.Control
                        type="text"
                        name="nif"
                        autoComplete="off"
                        value={editUser.nif}
                        onChange={handleChange}

                      />

                        <Form.Label className="labels mt-3 mb-2">Cargo dentro de la empresa</Form.Label>
                      <Form.Control
                        type="text"
                        name="position"
                        autoComplete="off"
                        value={editUser.position}
                        onChange={handleChange}


                      />

                        <Form.Label className="labels mt-3 mb-2">Teléfono</Form.Label>
                      <Form.Control
                        type="text"
                        name="phone"
                        autoComplete="off"
                        value={editUser.phone}
                        onChange={handleChange}


                      />
                        <Form.Label className="labels mt-3 mb-2">País</Form.Label>
                      <Form.Control
                        type="text"
                        name="country"
                        autoComplete="off"
                        value={editUser.country}
                        onChange={handleChange}


                      />
                        <Form.Label className="labels mt-3 mb-2">Moneda del usuario</Form.Label>
                      <Form.Control
                        type="text"
                        name="currency"
                        autoComplete="off"
                        value={editUser.currency}
                        onChange={handleChange}


                      />


                            </Form>
                         </Form.Group>

                        <div className='divBotonEditUser'>
                            <Button className="button mt-3 mb-2" onClick={handleSubmit} >
                            Enviar
                            </Button>
                      </div>
                    </Col>
                    
                </Row>
            </Container>

        </div>
    </>
  )
}

