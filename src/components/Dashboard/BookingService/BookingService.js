import React from 'react';
import Sidebar from '../Sidebar/Sidebar';

const BookingService = ({ order }) => {
    const { name, price, image, _id, email, time } = order;
    return (
           
            <div className="col-md-6 mt-4">
            <div className="card h-100 m-4">
                <img className="card-img-top img-fluid" src={image} alt="Card image cap"/>
                    <div className="card-body">
                        <h4 className="card-title text-success">Service Name: {name}</h4>
                        <h5 className="card-title text-danger">Charge: ${price}</h5>
                        <h6 className="card-title">{email}</h6>
                        <small className="card-title">{time}</small>
                        
                    </div>
            </div>

        </div>
    );
};

export default BookingService;