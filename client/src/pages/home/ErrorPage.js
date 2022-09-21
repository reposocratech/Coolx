import React from 'react'
import { Container, Row } from 'react-bootstrap'
import './errorpage.scss'

export const ErrorPage = () => {
  return (
    <Container fluid className='fondo'>
      <Row className='error'>
        <div className='emoticono'>
          <img src='./assets/inactive.svg' />
        </div>
        <div className='titulo'>
          <p>Se generó un error</p>
        </div>
        <div className='subtitulo'>
          <p>Por favor intentarlo de nuevo</p>
        </div>
        <div className='final'>
          <button className='button'>Volver</button>
        </div>

      </Row>
    </Container>

  )
}
