import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {
  return (
    <Container>
      <Navbar bg="light" expand="lg">
        <Link className="navbar-brand" to="/">
          MilkApp
        </Link>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link className="nav-link" to="/milk">
              Home
            </Link>
          </Nav>
          <FontAwesomeIcon icon={faShoppingCart} color="black" size="2x" />
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
};

export default NavBar;
