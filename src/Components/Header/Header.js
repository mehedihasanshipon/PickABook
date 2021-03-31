import React, { useContext } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import './Header.css'

const Header = () => {
    const [loggedInUser,setLoggedInUser] = useContext(UserContext);
    console.log(loggedInUser);
    return (
        <Navbar collapseOnSelect expand="lg" bg="white" variant="white">
            <div className="container">
                <Link className="navbar-brand" to="/">Book-shop</Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                    <Link to="/" className="nav-link">Home</Link>
                    <Link to="/orders" className="nav-link">Orders</Link>
                    <Link to="/admin" className="nav-link">Admin</Link>
                    <Link className="nav-link">Deals</Link>
                    <Link className="nav-link">
                        {
                            loggedInUser.email?<img src={ loggedInUser.photo || 'logo' } alt=""/>: null 
                        }
                    </Link>
                    </Nav>
                </Navbar.Collapse>
            </div>
        </Navbar>
    );
};

export default Header;