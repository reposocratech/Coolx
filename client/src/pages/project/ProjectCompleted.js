import axios from 'axios'
import React , { useEffect, useState }from 'react'
import { Row, Col, Container } from "react-bootstrap"
import { useNavigate } from 'react-router-dom'
import { Tarjetamas } from '../../components/card/Tarjetamas'
import { Requirements } from '../../components/project/Requirements'
import { Vegetation } from '../../components/vegetation/Vegetation'
import "./projectCompleted.scss"


export const ProjectCompleted = () => {

    const [projectPayed, setProjectPayed] = useState();
    const [reseteProject, setResetProject] = useState(false)

    const navigate = useNavigate();
    
    useEffect(() => {
        let pathname = window.location.pathname;
        const id = pathname.split("/")[2];
        console.log(id);

        axios
            .get(`http://localhost:4000/project/${id}/info`)
            .then((res) => {
                console.log(res, "soy res del projeccompleted");
                setProjectPayed(res.data)
                console.log(res.data, "RES PUNTO DATA");
                
            })
            .catch((err) => {
                console.log(err);
            })
      
    
     
    }, [reseteProject])
    

  return (
    <>
        <div className='cont-completedproject'>
        <div className='wrapper'>
            <Container fluid>

            <Col md={12} className="projectCard">
              <div className="title-project">
                <a onClick={() => navigate(-1)}>
                  <img src="/assets/icons/arrow_left.svg" />
                </a>
                <p>Proyecto</p>
              </div>
            </Col>

            <Row>
                <Col md={8}>
                    <Tarjetamas projectPayed={projectPayed}/>
                </Col>

                <Col md={3}>
                    <Requirements />
                </Col>
            </Row>

            <Row>
                <Col md={12} className="cards-vegetation-completedproject">
                    <Vegetation  projectPayed={projectPayed}/>
                </Col>
            </Row>


            <Row>
                <div className='cont-graficas'>

                <Col md={7} className="py-3">
                    <img src='/graficas/evolution.png'/>
                </Col>

                <Col md={7} className="py-3">
                    <img src='/graficas/foresthealth.png'/>
                </Col>

                <Col md={7} className="py-3">
                    <img src='/graficas/co2.png'/>
                </Col>

                <Col md={7} className="py-3">
                    <img src='/graficas/digitalterrain.png'/>
                </Col>

                </div>
            </Row>
            </Container>

            </div>
        </div>
    
        
      
    
    </>
  )
}
