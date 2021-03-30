import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="white" variant="white">
            <div className="container">
                <Navbar.Brand href="#home">Book-shop</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                    <Nav.Link href="#features">Home</Nav.Link>
                    <Nav.Link href="#pricing">Orders</Nav.Link>
                    <Nav.Link href="#features">Admin</Nav.Link>
                    <Nav.Link href="#pricing">Deals</Nav.Link>
                    <Nav.Link href="#pricing">image</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </div>
        </Navbar>
    );
};

export default Header;