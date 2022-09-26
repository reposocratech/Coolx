import React from 'react'
import {Navbar, Container, Nav, Button} from "react-bootstrap"
import { useNavigate, Link } from 'react-router-dom'
import "./navbar.scss"


export const NavBarMain = ({user, setUser, isLogged, setIsLogged}) => {

  const navigate = useNavigate();

  const handleLogout = () => {
    window.localStorage.removeItem("infocoolx")
    navigate("/");
    setIsLogged(false);
    setUser(false)
  }

  console.log(user);




  return (
   <> 
   <Navbar className='nav-color'  expand="lg">
        <Container >
        <Navbar.Brand className='navbar-logo' as={Link} to="/"> <img src='/assets/branding/logo_white.svg'/></Navbar.Brand>
        <Navbar.Toggle  aria-controls ="basic-navbar-nav"/>
        <Navbar.Collapse>
        <Nav className="me-auto">
    
         
        </Nav>
        

        {!isLogged ?  (<div>
                        <Button className='me-3' onClick={() => navigate(`/login`)}>Iniciar Sesion</Button>
                        </div>)
         : (
          <>
            {user && (
              <>
                {user &&

                  <div className="letra me-2">
                    <h3>{user.user_name[0]}</h3>
                  </div>
                }
              </>
            )}

            <Button
              className="me-2"
              variant="warning"
              onClick={() => navigate("/profile")}
            >
              Perfil de: {user && user.user_name}
            </Button>
            <Button variant="warning" onClick={handleLogout}>
              Logout
            </Button>
          </>
        )} 
         
    

         
         
         </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
