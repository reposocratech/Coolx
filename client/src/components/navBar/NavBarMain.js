import React from 'react'
import {Navbar, Container, Nav} from "react-bootstrap"
import "./navbar.scss"


export const NavBarMain = () => {
  return (
   <> 
   <Navbar className='nav-color'  expand="lg">
        <Container >
        <Navbar.Brand className='navbar-logo' > <img src='/icons/logowhite.png'/></Navbar.Brand>
        <Navbar.Toggle  aria-controls ="basic-navbar-nav"/>
        <Navbar.Collapse>
        <Nav className="me-auto">
    
        
        </Nav>
        </Navbar.Collapse>

         <button className='boton-sesion'>Iniciar sesion</button>
           
        </Container>
    </Navbar>
   
   </>
  )
}
