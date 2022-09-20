import React from 'react'
import { Button, Container } from 'react-bootstrap'
import { AdminUsers } from './AdminUsers'

export const Admin = () => {




  return (

    <Container>

      <Row>
        <Col>
              <h1>Aministradror</h1>
        </Col>
      </Row>
      <Row>
              <Col>
              <h4>Añadir proyecto</h4>
              <Button>Añadir proyecto</Button>
              </Col>

              <Col>
              <h4>Administrar usuario</h4>
              <Button>Administrar usuario</Button>
              </Col>

              <Col>
              <h4>Modificar estado de proyecto</h4>
              <Button>Modificar estado de proyecto</Button>
              </Col>
              
              <Col>
              <h4>Administrar árboles</h4>
              <Button>Administrar árboles</Button>
              </Col>
            

      </Row>
     </Container>

  )
}
