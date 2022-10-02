import React from "react";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";
import "./navbar.scss";

export const NavBarMain = ({
  isLogged,
  setIsLogged,
  setUser,
  user
}) => {

  const navigate = useNavigate();

  const handleNavigate = () => {
    if (user.user_type === 0) {
      navigate(`/user`);
    } else if (user.user_type === 1) {
      navigate("/admin");
    }
  };

  const handleLogout = () => {
    window.localStorage.removeItem("infocoolx");
    navigate("/");
    setIsLogged(false);
    setUser(null);
  };


  return (
    <>
      <Navbar fixed="top" className="nav-color" expand="lg">
        <Container>
          <Navbar.Brand className="navbar-logo" as={Link} to="/">
            {" "}
            <img src="/assets/branding/logo_white.svg" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse>
            <Nav className="me-auto"></Nav>

            {!isLogged ? (
              <div>
                <Button className="boton-sesion me-3" onClick={() => navigate(`/login`)}>
                  Iniciar Sesion
                </Button>
              </div>
            ) : (
              <>
                {user && ( 
                  <>
                    {user && (
                      <div className="cont-avatar">

                        <img className="me-3" src="/assets/icons/bell.svg"/>
                        {user && user.user_name}
                        
                        <div className="avatar-user me-2">
                          
                          <Button  onClick={handleNavigate}>
                            <h3>{user.user_name[0]}</h3>
                          </Button>
                        </div>

                        <div className="options-user">
                          <Button className="logout" onClick={handleLogout}>
                           <p>Logout</p>
                          </Button>

                          <Button className="edit" >
                            <p>Editar</p>
                          </Button> 
                        </div>
                      </div>
                    )}
                  </>
                )}

                
              </>
            )}

          
          

          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
