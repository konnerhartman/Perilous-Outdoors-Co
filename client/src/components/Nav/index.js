import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container, Modal, Tab } from 'react-bootstrap';

function AppNav() {

  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <>
          <Nav.Link to="/orderHistory">
            Order History
          </Nav.Link>
          {/* this is not using the Link component to logout or user and then refresh the application to the start */}
          <Nav.Link onClick={Auth.logout}>
            Logout
          </Nav.Link>
        </>
      );
    } else {
      return (
        <>
          <Nav.Link to="/signup">
            Signup
          </Nav.Link>
          <Nav.Link to="/login">
            Login
          </Nav.Link>
        </>
      );
    }
  }

  return (
    <Navbar>
      <Container fluid>
        <Navbar.Brand as={Link} to='/'>
          Perilous Outdoors Co.
        </Navbar.Brand>
        <Nav className="collapse navbar-collapse" id="navbarNav">
          <Nav.Link to="/about">
            About
          </Nav.Link>
          <Nav.Link to="/shop">
            Shop
          </Nav.Link>
          {showNavigation()}
        </Nav>
      </Container>
    </Navbar>
  );
}

export default AppNav;
