import React from 'react';
import paint from '../../../images/paint.jpg'
import engine from '../../../images/engine.jpg'
import glass from '../../../images/glass.jpg'
import ServiceDetails from '../ServiceDatails/ServiceDetails';

const serviceData = [
    {
        name: 'Engine, brake and transmission experts',
        img: engine
    },
    {
        name: 'Auto Paint expert',
        img: paint
    },
    {
        name: 'Autoglass repair',
        img: glass
    }
]

const Services = () => {
    return (
        <section className="mt-5">
            <div className="text-center">
                <h5 style={{color: '#1CC7C1'}}>OUR SERVICES</h5>
                <h2>Services We Provide</h2>
            </div>
            <div className="d-flex justify-content-center">
            <div className="w-75 row mt-5 pt-5">
                {
                    serviceData.map(service => <ServiceDetails service={service} key={service.name}> </ServiceDetails>)
                }
            </div>
        </div>
        </section>
    );
};

export default Services;