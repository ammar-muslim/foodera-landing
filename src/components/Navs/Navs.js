import React from 'react';
import './Navs.css';
import { Navbar, Nav, Container, NavLink } from 'react-bootstrap';
import logo from './../../assets/images/logo.png';

const Navs = () => {
  return (
    <Navbar expand="lg" className="custom-navbar">
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} title="logo" alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">About Us</Nav.Link>
            <Nav.Link href="#explore-food">Explore Food</Nav.Link>
            <Nav.Link href="#reviews">Reviews</Nav.Link>
            <Nav.Link href="#faq">FAQ</Nav.Link>
            <NavLink id="contact-number">235648210</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navs;
