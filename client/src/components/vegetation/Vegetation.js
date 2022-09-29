import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './vegetation.scss'

export const Vegetation = ({  projectPayed }) => {
    
    console.log(projectPayed);

  return (
    <div className='base-vegetacion'>
        <Container fluid>

            <div className='projectCard'>
                <p>Análisis Vegetación</p>
            </div>
            
            <Row className='tarjetas-vegetacion'>

                <Col className='col-2'>
                    <h4>Altura Promedio de la vegetacion</h4>

                    <div className='dividir-vegetacion'>
                        <div>
                            <img src='/images/icono_arbol_azul.png'/>
                        </div>
                        <div>
                            <h6>Corresponde a árboles</h6>
                            <h1>{projectPayed && projectPayed[0].avg_height}</h1>
                        </div>
                    </div>

                    <div>
                        <p>Estimación con técnologia satelital</p>
                        <img/>
                    </div>

                    <div className='botones-vegetacion'>
                        <button className='buton-1'>Ver mas</button>
                        <button className='buton-2'>
                            <img src='/assets/icons/upload_file.svg'/>
                        </button>
                    </div>
                </Col>

                <Col className='col-2'>
                    <h4>Ìndices de calidad de los suelos</h4>

                    <div className='dividir-vegetacion'>
                        <div>
                            <img src='/images/icono_arbol_azul.png'/>
                        </div>
                        <div>
                            <h6>Corresponde a árboles</h6>
                            <h1>{projectPayed && projectPayed[0].soil_quality}</h1>
                        </div>
                    </div>

                    <div>
                        <p>Estimación con técnologia satelital</p>
                        <img/>
                    </div>

                    <div className='botones-vegetacion'>
                        <button className='buton-1'>Ver mas</button>
                        <button className='buton-2'>
                            <img src='/assets/icons/upload_file.svg'/>
                        </button>
                    </div>
                </Col>

                <Col className='col-2'>
                    <h4>Índice de densidad estructural</h4>

                    <div className='dividir-vegetacion'>
                        <div>
                            <img src='/images/icono_arbol_azul.png'/>
                        </div>
                        <div>
                            <h6>Corresponde a árboles</h6>
                            <h1>{projectPayed && projectPayed[0].structural_density}</h1>
                        </div>
                    </div>

                    <div>
                        <p>Estimación con técnologia satelital</p>
                        <img/>
                    </div>

                    <div className='botones-vegetacion'>
                        <button className='buton-1'>Ver mas</button>
                        <button className='buton-2'>
                            <img src='/assets/icons/upload_file.svg'/>
                        </button>
                    </div>
                </Col>

                <Col className='col-2'>
                    <h4>Números de arboles</h4>

                    <div className='dividir-vegetacion'>
                        <div>
                            <img src='/images/icono_arbol_azul.png'/>
                        </div>
                        <div>
                            <h6>Corresponde a árboles</h6>
                            <h1>{projectPayed && projectPayed[0].trees_quantity}</h1>
                        </div>
                    </div>

                    <div>
                        <p>Estimación con técnologia satelital</p>
                        <img/>
                    </div>

                    <div className='botones-vegetacion'>
                        <button className='buton-1'>Ver mas</button>
                        <button className='buton-2'>
                            <img src='/assets/icons/upload_file.svg'/>
                        </button>
                    </div>
                </Col>

               
            </Row>
            <br/>
            <Row className='tarjetas-vegetacion'>

            <Col className='col-2'>
                    <h4>Índice de Clorofila verde</h4>

                    <div className='dividir-vegetacion'>
                        <div>
                            <img src='/images/icono_arbol_azul.png'/>
                        </div>
                        <div>
                            <h6>Corresponde a árboles</h6>
                            <h1>{projectPayed && projectPayed[0].green_chlorophyll}</h1>
                        </div>
                    </div>

                    <div>
                        <p>Estimación con técnologia satelital</p>
                        <img/>
                    </div>

                    <div className='botones-vegetacion'>
                        <button className='buton-1'>Ver mas</button>
                        <button className='buton-2'>
                            <img src='/assets/icons/upload_file.svg'/>
                        </button>
                    </div>
                </Col>

                <Col className='col-2'>
                    <h4>Índice de Calcinación Normalizado</h4>

                    <div className='dividir-vegetacion'>
                        <div>
                            <img src='/images/icono_arbol_azul.png'/>
                        </div>
                        <div>
                            <h6>Corresponde a árboles</h6>
                            <h1>{projectPayed && projectPayed[0].standard_calcination}</h1>
                        </div>
                    </div>

                    <div>
                        <p>Estimación con técnologia satelital</p>
                        <img/>
                    </div>

                    <div className='botones-vegetacion'>
                        <button className='buton-1'>Ver mas</button>
                        <button className='buton-2'>
                            <img src='/assets/icons/upload_file.svg'/>
                        </button>
                    </div>
                </Col>

                <Col className='col-2'>
                    <h4>Pendiente promedio del terreno</h4>

                    <div className='dividir-vegetacion'>
                        <div>
                            <img src='/images/icono_arbol_azul.png'/>
                        </div>
                        <div>
                            <h6>Corresponde a árboles</h6>
                            <h1>{projectPayed && projectPayed[0].avg_land_slope}</h1>
                        </div>
                    </div>

                    <div>
                        <p>Estimación con técnologia satelital</p>
                        <img/>
                    </div>

                    <div className='botones-vegetacion'>
                        <button className='buton-1'>Ver mas</button>
                        <button className='buton-2'>
                            <img src='/assets/icons/upload_file.svg'/>
                        </button>
                    </div>
                </Col>

                <Col className='col-2'>
                    <h4>Índice de vegetación resistente a la Atm</h4>

                    <div className='dividir-vegetacion'>
                        <div>
                            <img src='/images/icono_arbol_azul.png'/>
                        </div>
                        <div>
                            <h6>Corresponde a árboles</h6>
                            <h1>{projectPayed && projectPayed[0].atm_vegetation_resistant}</h1>
                        </div>
                    </div>

                    <div>
                        <p>Estimación con técnologia satelital</p>
                        <img/>
                    </div>

                    <div className='botones-vegetacion'>
                        <button className='buton-1'>Ver mas</button>
                        <button className='buton-2'>
                            <img src='/assets/icons/upload_file.svg'/>
                        </button>
                    </div>
                </Col>

            </Row>
        </Container>



    </div>
  )
}
