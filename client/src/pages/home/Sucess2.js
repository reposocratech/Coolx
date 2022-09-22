import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import './errorpage.scss'

export const Succes2 = () => {
    return (
        <div >
        <Container fluid className='fondo-error pt-5'>
          <Row className='error'>
            <Col className='columna pb-5'>
              <div className='emoticono pb-5'>
              <img src='./assets/active_on.svg' />
              </div>
    
              <h1 className='pb-2'>Tu proyecto se ha registrado con éxito</h1>
              <h4 className='pb-5'>Para observar el estado de tu proyecto y obtener todos los datos, registrate.</h4>
              <button className='button-error'>Acceder al proyecto</button>
            
            </Col>
          </Row>
        </Container>
        </div>
    
      )
    }