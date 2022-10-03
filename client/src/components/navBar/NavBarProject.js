import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./navbar.scss";

export const NavBarProject = () => {
  const navigate = useNavigate();

  return (
    <>
      <Navbar className="nav-colorProject" expand="lg">
        <Container>
          {/* <Navbar.Brand className='navbar-logo'> <img src='/assets/branding/logo_white.svg'/></Navbar.Brand>
            <Navbar.Toggle  aria-controls ="basic-navbar-nav"/>
            <Navbar.Collapse>
            <Nav className="me-auto">
        </Nav>
        

        <button className='boton-proyecto me-3'>Registra tu proyecto</button>
        <button className='boton-sesion' onClick={()=> navigate("/login")}>Iniciar sesión</button>
           </Navbar.Collapse> */}
        </Container>
      </Navbar>
    </>
  );
};
