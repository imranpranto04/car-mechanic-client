import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import icon from '../../../images/icon.png'
import './Navbars.css';

const Navbars = () => {
    return (

        <div className="container">
            <Navbar bg="light" expand="lg">
                <Navbar.Brand className="">
                <Link to="/home"><img src={icon} alt=""/></Link> </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto nav">
                        <li><Link Link to="/home">Home</Link></li>
                        <li><Link link to="/addService">Add Service</Link></li>
                        <li><Link Link to="/dashboard">Dashboard</Link></li>
                        <li><Link Link to="/addProduct">Admin</Link></li>
                        <li>

                            <Link to="/login">Login</Link>

                        </li>

                    </Nav>

                </Navbar.Collapse>
            </Navbar>
        </div>
         
    );
};

export default Navbars;