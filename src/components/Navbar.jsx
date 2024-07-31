
import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-scroll';


const Navigation = () => {
  return (
    <Navbar bg="light" expand="lg" fixed="top">
      <Navbar.Brand href="#">My Portfolio</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link>
            <Link to="about" smooth={true} duration={1000}>About</Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="projects" smooth={true} duration={1000}>Projects</Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="dreams" smooth={true} duration={1000}>Dreams</Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="skills" smooth={true} duration={1000}>Skills</Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="contact" smooth={true} duration={1000}>Contact</Link>
          </Nav.Link>

        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
