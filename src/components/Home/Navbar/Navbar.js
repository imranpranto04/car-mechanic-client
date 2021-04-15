import React from 'react';
import icon from '../../../images/icon.png'

const Navbar = () => {
    return (
        <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">

                    <img style={{height: '50px'}} src={icon} alt=""/>

                    {/* <a className="navbar-brand" href="#">Navbar</a> */}
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 p-3 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="#">About US</a>
                            </li>
                            
                            <li className="nav-item">
                                <a className="nav-link" href="#">Services</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="#">Login</a>
                            </li>
                            

                        </ul>

                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;