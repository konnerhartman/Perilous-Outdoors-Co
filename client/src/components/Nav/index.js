import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container, Modal, Tab } from 'react-bootstrap';

function AppNav() {

  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <ul className="flex-row">
          <li className="mx-1">
            <Link to="/orderHistory">
              Order History
            </Link>
          </li>
          <li className="mx-1">
            {/* this is not using the Link component to logout or user and then refresh the application to the start */}
            <a href="/" onClick={() => Auth.logout()}>
              Logout
            </a>
          </li>
        </ul>
      );
    } else {
      return (
        <ul className="flex-row">
          <li className="mx-1">
            <Link to="/about">
              About
            </Link>
          </li>
          <li className="mx-1">
            <Link to="/shop">
              Shop
            </Link>
          </li>
          <li className="mx-1">
            <Link to="/signup">
              Signup
            </Link>
          </li>
          <li className="mx-1">
            <Link to="/login">
              Login
            </Link>
          </li>
        </ul>
      );
    }
  }

  return (
    <Navbar>
      <Container fluid>
        <Navbar.Brand as={Link} to='/'>
          Perilous Outdoors Co.
        </Navbar.Brand>
        <div className="collapse navbar-collapse" id="navbarNav">
          {showNavigation()}
        </div>
      </Container>
    </Navbar>
  );
}

export default AppNav;
