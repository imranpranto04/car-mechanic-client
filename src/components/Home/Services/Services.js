import React, { useEffect, useState  } from 'react';
import paint from '../../../images/paint.jpg'
import engine from '../../../images/engine.jpg'
import glass from '../../../images/glass.jpg'
import ServiceDetails from '../ServiceDatails/ServiceDetails';

// const serviceData = [
//     {
//         name: 'Engine, brake and transmission experts',
//         img: engine
//     },
//     {
//         name: 'Auto Paint expert',
//         img: paint
//     },
//     {
//         name: 'Autoglass repair',
//         img: glass
//     }
// ]

const Services = () => {

    const [carService, setCarService] = useState([]);

    useEffect( ()=> {
        fetch('http://localhost:5000/services')
        .then(res=> res.json())
        .then(data=> setCarService(data));
    }, []);

    return (
        <section className="mt-5">
            <div className="text-center">
                <h5>OUR SERVICES</h5>
                <h2>Services We Provide</h2>
            </div>
            <div className="d-flex justify-content-center">
            <div className="w-75 row mt-3 pt-5">
            {/* <div className="row"> */}
                {
                    carService.map(service => <ServiceDetails service={service} key={service._id}> </ServiceDetails>)
                }
            </div>
            </div>
        
        </section>
    );
};

export default Services;