import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import "./home.scss"


export const Home = () => {
  return (
    <>
    <Container fluid>
      <Row >
        <Col className='fondo-home' >

          <div className='texto'>
            <p>Optimizamos el registro y la evaluación de tus proyectos forestales</p>

            <button>Contáctanos</button>
          </div>
          
        </Col>
      
      </Row>
    </Container>
      
    </>
  )
}
