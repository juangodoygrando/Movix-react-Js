import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CardWidget from './CartWidget';
import { NavLink } from 'react-router-dom';

function NavBarApp() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
    if (!isOpen) {
      
      setTimeout(() => {
        setIsOpen(false);
            }, 2500);
    }
  };

  return (
    <>
      <Navbar className="styleNavBar" data-bs-theme="black" expand="lg" expanded={isOpen}>
        <Container className="d-flex fs-3 fw-li justify-content-between">
          <NavLink to='/'>
            <img className="logoNavBar" src="/logoMovix.svg" alt="logoMovix" />
          </NavLink>
          
          
          <Navbar.Toggle 
            aria-controls="basic-navbar-nav" 
            onClick={handleToggle} 
          />
          
          <Navbar.Collapse id="basic-navbar-nav" className="ms-auto justify-content-end">
            <Nav >
              <Nav.Link to='/' as={NavLink} className="ms-auto">Inicio</Nav.Link>
              <NavDropdown className="ms-auto" title="Telefonos" id="basic-nav-dropdown">
                <NavDropdown.Item  to='/product/Apple' as={NavLink}>Apple</NavDropdown.Item>
                <NavDropdown.Item to='/product/Samsung' as={NavLink}>Samsung</NavDropdown.Item>
                <NavDropdown.Item to='/product/Xiaomi' as={NavLink}>Xiaomi</NavDropdown.Item>

                <NavDropdown.Divider />
                <NavDropdown.Item to='/product/Reacondicionado' as={NavLink}>Reacondicionados</NavDropdown.Item>
              </NavDropdown>

              <Nav.Link className="ms-auto" to='/vende-tu-tech' as={NavLink}>Vende tu tech!</Nav.Link>
              <Nav.Link  to='/product/Ofertas' as={NavLink} className="text-danger ms-auto">Ofertas</Nav.Link>
            </Nav>
            <NavLink  to={'/cart'} className="text-end">
              <CardWidget />
            </NavLink>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBarApp;
