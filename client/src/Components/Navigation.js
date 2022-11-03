import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
const Navigation = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link>Home</Nav.Link>
            <Nav.Link as={Link} to="/product">
              Products
            </Nav.Link>
            <Nav.Link as={Link} to="/addProduct">
              Add Product
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <br />
    </div>
  );
};

export default Navigation;
