import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { NavBarProject } from '../../components/navBar/NavBarProject'
import "./home.scss"


export const Home = () => {
  return (
    <>
    <Container fluid>
      <Row >
        <Col md={12} lg={12} className='fondo-home' >

          <div className='texto'>
            <p>Optimizamos el registro y la evaluación de tus proyectos forestales</p>

            <button>Contáctanos</button>

              <div className='leerMas'>
                  <p>Leer más</p>
                  <img src='/assets/icons/arrow.svg' alt='arrow_down'/>
              </div>

          </div>
        </Col>
      </Row>

      <Row className="fondoRegProject">
        
        <div className='fondoBlur'>

        <Col md={12} className ="p-0" >
          <NavBarProject/>
        </Col>

        <Col className='info'>

            <Col md={12} className="topInfo text-white">

              <img src='/assets/icons/info_top.svg'/>

              <p>Mediante teledetección y big data, disminuimos el tiempo necesario para que tu consultoría medioambiental genere créditos de carbono</p>

            </Col>

            <Col md={12} className="bottomInfo text-white">

            
              <p>Esta tecnología nos permite hacer estimaciones más precisas y constantes, generando confianza en cada crédito de carbono</p>

              <img src='/assets/icons/info_bottom.svg'/>
            
            </Col>
        
        </Col>
        </div>
      </Row>

      <Col className='bloqueProces'>

        <div>
          <h1>¿Como será el proceso?</h1>
        </div>
      
      </Col>
      
    </Container>
      
    </>
  )
}
