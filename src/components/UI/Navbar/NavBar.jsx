import React from 'react';
import {Container, Nav, Navbar, Offcanvas} from "react-bootstrap";
import {Link} from "react-router-dom";
import Home from "../../../utils/Home";
import Add from "../../../utils/Add";
import Contacts from "../../../utils/Contacts";
import About from "../../../utils/About";


const NavBar = () => {
  return (
    <Navbar bg='dark' expand='md' className='mb-3'>
      <Container fluid>
        <Navbar.Brand>
          <Link to={<Home />} style={{textDecoration: 'none'}}>My blog</Link>
        </Navbar.Brand>
        <Navbar.Offcanvas placement="end">
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link><Link to={<Home/>} style={{textDecoration: 'none'}}>Home</Link></Nav.Link>
              <Nav.Link><Link to={<Add/>} style={{textDecoration: 'none'}}>Add</Link></Nav.Link>
              <Nav.Link><Link to={<About/>} style={{textDecoration: 'none'}}>About</Link></Nav.Link>
              <Nav.Link><Link to={<Contacts/>} style={{textDecoration: 'none'}}>Contacts</Link></Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};

export default NavBar;