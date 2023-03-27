import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { LinkContainer } from 'react-router-bootstrap';
import logo from '../assets/img/logo.webp'
import Button from 'react-bootstrap/Button';
const Header = () => {
  return (
    <Navbar expand="lg" className='nav'>
      <Container>
        <LinkContainer to="/home">
        <Navbar.Brand ><img src={logo} alt="" /></Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <LinkContainer to="/home">
            <Nav.Link >Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/service">
            <Nav.Link href="#link">Service</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/store">
            <Nav.Link href="#link">Store</Nav.Link>
            </LinkContainer>
           <LinkContainer to="/contact">
           <Nav.Link href="#link">Contact</Nav.Link>
           </LinkContainer>
           <LinkContainer to="/project">
           <Nav.Link href="#link">Project</Nav.Link>
           </LinkContainer>
          </Nav>
          <Button variant="primary" className='rounded-pill fw-bolder'>Get Started</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header