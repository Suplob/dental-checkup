import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import "./Header.css";

const Header = () => {
  const { users, handleLogOut } = useAuth();

  return (
    <Navbar bg="navStyle" variant="dark" collapseOnSelect expand="md" sticky>
      <Container>
        <Navbar.Brand as={Link} to="/home">
          Dental Checkup
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/home">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/services">
              Services
            </Nav.Link>
            <Nav.Link as={Link} to="/specialists">
              Specialists
            </Nav.Link>
            <Nav.Link as={Link} to="/contactus">
              Contact Us
            </Nav.Link>

            {users.email ? (
              <>
                <Nav.Link>
                  <span className="fw-bold text-white">
                    Hello, {users.displayName}
                  </span>
                </Nav.Link>
                <button
                  className="btn btn-primary btn-sm"
                  onClick={handleLogOut}
                >
                  Sign Out
                </button>
              </>
            ) : (
              <>
                <Nav.Link as={Link} to="/login">
                  Login
                </Nav.Link>
                <Nav.Link as={Link} to="/register">
                  Register
                </Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
