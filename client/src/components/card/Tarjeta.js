import React from 'react'
import { Col, Container, Row, Button } from 'react-bootstrap'
import './tarjeta.scss'





export const Tarjeta = () => {
  return (
    <div className='bg' >

    <Container className='bage' >
      
      <Row className='contenedor' >

        <Col className='img'>
          <img src='/images/Bosque.jpg' />
        </Col>

        <Col className='letras'>

          <div>
            <h4>Proyecto de Ejemplo</h4>
          </div>

          <div className='division'>

            <div>
              <img src='/assets/icons/location.svg'/>
            </div>

            <div>
              <p>Peru</p>
            </div>

          </div>

          <div className='division'>

            <div >
              <img src='/assets/icons/location.svg'/>
            </div>

            <div>
              <p>Area del terreno</p>
            </div>
             
          </div>

          <div className='division'>

              <div className='prueba'>
                <img src='/assets/icons/location.svg'/>
              </div>

              <div>
                <h5>Ganacias consultora</h5>
                <h4>94100 $</h4> 
              </div>
              
          </div>

          <div>
            <button className='butun'>Ver mas</button>
          </div>

        </Col>
      </Row>
    </Container>
    </div>
    
  )
}
