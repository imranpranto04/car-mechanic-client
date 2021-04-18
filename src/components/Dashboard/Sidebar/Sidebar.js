import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus, faUserEdit, faPlusCircle, faShoppingCart, faTrashAlt,faSignOutAlt, faCalendar, faHome, faGripHorizontal, faUserPlus, faUsers } from '@fortawesome/free-solid-svg-icons';
import './Sidebar.css';

const Sidebar = () => {
    return (
        // <div className="row">
        <div className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4" style={{ height: "100vh" }}>
            <ul className="list-unstyled">
                <li>
                    <Link to="/dashboard" className="text-white">
                        <FontAwesomeIcon icon={faGripHorizontal} /> <span>Dashboard</span>
                    </Link>
                </li>

                <li>
                    <Link to="/" className="text-white">
                        <FontAwesomeIcon icon={faHome} /> <span>Home</span>
                    </Link>
                </li>

                <h5 className="text-warning mb-4">For Users</h5>
                <li>
                    <Link to="/order" className="text-white">
                        <FontAwesomeIcon icon={faCartPlus} /> <span>Booking Services</span>
                    </Link>
                </li>
                <li>
                    <Link to="/addReview" className="text-white">
                        <FontAwesomeIcon icon={faUserEdit} /> <span>Add Review</span>
                    </Link>
                </li>

               

                <h5 className="text-warning mb-4">For Admins only</h5>

                <li>
                    <Link to="/addService" className="text-white" >
                        <FontAwesomeIcon icon={faPlusCircle} /> <span>Add Services</span>
                    </Link>
                </li>

                <li>
                    <Link to="/delete" className="text-white">
                        <FontAwesomeIcon icon={faTrashAlt} /> <span>Delete Service</span>
                    </Link>
                </li>

                <li>
                    <Link to="/order" className="text-white">
                        <FontAwesomeIcon icon={faShoppingCart} /> <span>See ordered services</span>
                    </Link>
                </li>

            </ul>

            
            <div>
                <Link to="/" className="text-white"><FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span></Link>
            </div>
        </div>
       
    );
};

export default Sidebar;