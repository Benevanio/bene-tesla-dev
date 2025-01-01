// src/components/Navbar.jsx
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <Navbar bg="dark" variant="dark"  fixed="top">
      <Container>
        <Navbar.Brand href="/">@Bene_Tesla_Dev</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/about">Sobre</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contato</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
