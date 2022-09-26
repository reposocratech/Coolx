import axios from 'axios'
import React, { useState } from 'react'
import { Col, Container, Row, Button } from 'react-bootstrap'
import './tarjeta.scss'





export const Tarjeta = ({projects}) => {

  const [project, setProject] = useState();

  const handleSend = () => {

    const {projects_id} = projects

    axios
      .get(`http://localhost:4000/project/${projects_id}`)
      .then((res)=> {
        console.log(res);
        setProject(res.data.result);
      })
    
  }

  return (
    <div className='bg' >

    {projects && 

    projects.map((projects, index)=> {
      return(
        <Container className='bage' >
      
        <Row className='contenedor' >
  
          <Col className='img'>
            <img src='/images/Bosque.jpg' />
          </Col>
  
          <Col className='letras'>
  
            <div>
              <h4>{projects.project_name}</h4>
            </div>
  
            <div className='division'>
  
              <div>
                <img src='/assets/icons/location.svg'/>
              </div>
  
              <div>
                <p>{projects.location}</p>
              </div>
  
            </div>
  
            <div className='division'>
  
              <div >
                <img src='/assets/icons/location.svg'/>
              </div>
  
              <div>
                <p>{projects.area}</p>
              </div>
               
            </div>
  
            <div className='division'>
  
                <div className='prueba'>
                  <img src='/assets/icons/location.svg'/>
                </div>
  
                <div>
                  <h5>Ganacias consultora</h5>
                  <h4>{projects.profit} $</h4> 
                </div>
                
            </div>
  
            <div>
              <button className='butun' onClick={handleSend}>Ver mas</button>
            </div>
  
          </Col>
        </Row>
      </Container>
  
      )
    })}
    
    
    
    
    </div>
    
  )
}
