import React, { useState } from 'react';
import {Col, Row, Button, Form, FloatingLabel} from 'react-bootstrap';

export const ContactForm = () => {

    const [user, setUser] = useState({
        userName:"",
        email:"",
        userMessage:"",
    })


  return (
    <>
        <Row>
            <Col md={4}>
                <h1>CONTACTA</h1>
                <h4>Mándanos un mensaje</h4>

                <Form.Group className="mb-3" controlId="contactForm">
                    <Form
                        className='d-flex flex-column'
                        encType='multipart/form'>

                        <Form.Label>Nombre</Form.Label>
                        <Form.Control 
                            type="text" 
                            placeholder='nombre'
                            name='name'                    
                            autoComplete="off"  
                        />

                        <Form.Label>Email</Form.Label>
                        <Form.Control 
                            type="email"
                            placeholder='email'
                            name='email'                    
                            autoComplete="off" 
                        />

                        <Form.Label>Mensaje</Form.Label>
                        <FloatingLabel controlId="mensaje" label="">
                            <Form.Control
                                className='' 
                                as="textarea"
                                placeholder="mensaje"
                                style={{ height: '100px' }}
                            />
                        </FloatingLabel>

                        <Form.Check 
                            type='checkbox'
                            id='default-checkbox'
                            label='He leído y acepto la política de privacidad'
                        />

                        <div>
                            <Button className='m-2' >Enviar</Button>
                        </div>
                    </Form>
                </Form.Group>

            </Col>
        </Row>
    </>

  )
}
