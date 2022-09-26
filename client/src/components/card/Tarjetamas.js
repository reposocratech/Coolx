import React from 'react'
import { Col, Container, Row, Carousel } from 'react-bootstrap'
import './tarjeta.scss'





export const Tarjetamas = ({}) => {

  return (
    <>

    
    <Container className='bage' >
      
      <Row className='contenedor' >

      <Col className='img'>
       
            <Carousel>

            <Carousel.Item>
                <img
                className="d-block w-100"
                src='/images/Bosque.jpg'
                alt="First slide"
                />
               
            </Carousel.Item>

            <Carousel.Item>
                <img
                className="d-block w-100"
                src='/images/Bosque3.jpg'
                alt="Second slide"
                />

            </Carousel.Item>

            <Carousel.Item>
                <img
                className="d-block w-100"
                src='/images/Bosque2.jpg'
                alt="Third slide"
                />
            </Carousel.Item>

            </Carousel>

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
                <p>Tipo de madera</p>
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

                <div >
                <img src='/assets/icons/location.svg'/>
                </div>

                <div>
                <p>Años desde su plantación</p>
                </div>

                </div>

            <div>
              <button className='butun'>Descargar documento</button>
            </div>

        </Col>

      </Row>
    </Container>
    </>
  )
}

