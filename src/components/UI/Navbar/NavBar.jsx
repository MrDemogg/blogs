import React from 'react';
import {Container, Nav, Navbar, Offcanvas} from "react-bootstrap";
import {Link} from "react-router-dom";


const NavBar = () => {
  return (
    <Navbar bg='dark' expand='md' className='mb-3'>
      <Container fluid>
        <Navbar.Brand>
          <Link to='/home' style={{textDecoration: 'none'}}>My blog</Link>
        </Navbar.Brand>
        <Navbar.Offcanvas placement="end">
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Link to='/home' style={{textDecoration: 'none', margin: '0 10px 0 0'}}>Home</Link>
              <Link to='/add' style={{textDecoration: 'none', margin: '0 10px 0 0'}}>Add</Link>
              <Link to='/about' style={{textDecoration: 'none', margin: '0 10px 0 0'}}>About</Link>
              <Link to='/contacts' style={{textDecoration: 'none', margin: '0 10px 0 0'}}>Contacts</Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};

export default NavBar;