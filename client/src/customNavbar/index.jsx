import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Form,Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Users from '../ComponentA/Users';

function MyNavBar() {
  const [,setSearch] = useSearchParams();
  return (
    <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
      <Container fluid>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to={"/"}>Home</Nav.Link>
            <Nav.Link as={Link} to={"/routing"}>Routing</Nav.Link>
          </Nav> 
          <Nav>
            <Nav.Link as={Link} to={"/user/login"}>Login</Nav.Link>
            <Nav.Link as={Link} to={"/user/signup"}>Signup</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              onChange={e=>setSearch({name:e.target.value})}
            />
            <Button variant="outline-success">Search</Button>\
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavBar;