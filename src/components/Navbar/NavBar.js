import React from "react"
import { Navbar, Nav, Container } from "react-bootstrap"
import "./style.css"
import logo from "../../assets/images/navbarLogo.png"
import { Link } from "gatsby"

export default function NavBar() {
  return (
    <Container fluid className="navbarContainerFluid">
      <Container className="navbarContainer">
        <Navbar expand="md" variant="dark">
          <Link to="/" className="nav-link">
            <Navbar.Brand href="/">
              <img
                alt="logo"
                src={logo}
                width="30"
                height="30"
                className="d-inline-block align-top"
              />
              HORIZON
            </Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Item>
                <Link to="/#about" className="nav-link">
                  About
                </Link>
              </Nav.Item>
              <Nav.Item>
                <Link to="/team/" className="nav-link">
                  Team
                </Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#contactUs">Contact Us</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Link to="/News/" className="nav-link">
                  News
                </Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </Container>
  )
}
