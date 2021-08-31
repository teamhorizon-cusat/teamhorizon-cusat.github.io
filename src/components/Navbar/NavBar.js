import React from 'react'
import {Navbar,Nav,Container}  from 'react-bootstrap'
import './style.css';
import logo from '../../assets/images/navbarLogo.png';

export default function NavBar() {
    return (
        <Container fluid className="navbarContainerFluid">
            <Container className="navbarContainer">
                <Navbar expand="md" variant="dark">
                    <Navbar.Brand href="/">
                            <img
                                alt="logo"
                                src={logo}
                                width="30"
                                height="30"
                                className="d-inline-block align-top"
                            />{' '}
                        HORIZON</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Item>
                                <Nav.Link href="#about">About</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="#team">Team</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="#contactUs">Contact Us</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="/News/">News</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Container>
        </Container>
    )
}
