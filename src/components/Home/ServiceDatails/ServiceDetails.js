import React from 'react';

const ServiceDetails = ({service}) => {

    const { name, price, image, _id, description } = service;

    return (
        <div className="col-md-4 text-center">

            {/* <img style={{ height: '150px' }} src={service.imageURL} alt="" />
            <h5 className="mt-3 mb-3">{service.name}</h5>
            <p className="text-secondary">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, quaerat?</p> */}

            <div className="card" style={{width: '18rem'}}>
                <img className="card-img-top img-fluid" src={image} alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">Service: {name}</h5>
                    <h5 className="card-title">Charge: ${price}</h5>
                    <p className="card-text">{description}</p>
                    <a href="#" className="btn btn-success">Get Service</a>
                </div>
            </div>
        </div>


    );
};

export default ServiceDetails;