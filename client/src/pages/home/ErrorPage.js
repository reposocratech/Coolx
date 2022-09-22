import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import './errorpage.scss'

export const ErrorPage = () => {
  return (
    <div >
    <Container fluid className='fondo-error pt-5'>
      <Row className='error pt-5'>
        <Col className='columna pb-5'>
          <div className='emoticono pb-5'>
            <img src='./assets/inactive.svg' />
          </div>

          <h1 className='pb-2'>Se generó un error</h1>
          <h4 className='pb-5'>Por favor intentalo de nuevo.</h4>
          <button className='button-error'>Volver</button>
        
        </Col>
      </Row>
    </Container>
    </div>

  )
}
