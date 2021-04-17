import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import icon from '../../../images/icon.png'
import './Navbars.css';

const Navbars = () => {
    return (

        <div className="container-fluid">
            <Navbar style={{backgroundColor: '#F0F8FF'}} expand="lg">
                <Navbar.Brand className="">
                <Link to="/home"><img style={{ width: '150px' }}src={icon} alt=""/></Link> </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto nav">
                        <li><Link style={{ textDecoration: 'none', color: '#3A4256' }} Link to="/home">Home</Link></li>
                        <li><Link style={{ textDecoration: 'none', color: '#3A4256' }} link to="/addService">Add Service</Link></li>
                        <li><Link style={{ textDecoration: 'none', color: '#3A4256' }} Link to="/dashboard">Dashboard</Link></li>
                        <li><Link style={{ textDecoration: 'none' , color: '#3A4256'}} Link to="/addProduct">Admin</Link></li>
                        <li>

                            <Link style={{ textDecoration: 'none', color: '#3A4256' }} to="/login">Login</Link>

                        </li>

                    </Nav>

                </Navbar.Collapse>
            </Navbar>
        </div>
         
    );
};

export default Navbars;