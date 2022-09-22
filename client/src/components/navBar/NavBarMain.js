import React from 'react'
import {Navbar, Container, Nav, Button} from "react-bootstrap"
import { useNavigate } from 'react-router-dom'
import "./navbar.scss"


export const NavBarMain = () => {

  const navigate = useNavigate();


  return (
   <> 
   <Navbar className='nav-color'  expand="lg">
        <Container >
        <Navbar.Brand className='navbar-logo'> <img src='/assets/branding/logo_white.svg'/></Navbar.Brand>
        <Navbar.Toggle  aria-controls ="basic-navbar-nav"/>
        <Navbar.Collapse>
        <Nav className="me-auto">
    
         
        </Nav>
        </Navbar.Collapse>


         <Button className='boton-sesion' onClick={()=>navigate("/login")}>Iniciar sesion</Button>

        </Container>
      </Navbar>
    </>
  );
};
