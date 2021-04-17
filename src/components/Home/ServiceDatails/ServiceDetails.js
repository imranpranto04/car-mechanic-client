import React from 'react';
import { Link } from 'react-router-dom';
import './ServiceDetails.css';
import { useSpring, animated } from 'react-spring'


const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1]
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`


const ServiceDetails = ({ service }) => {

    const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }))


    const { name, price, image, _id, description } = service;

    return (
        <div className="col-md-4 text-center my-3">

            {/* <img style={{ height: '150px' }} src={service.imageURL} alt="" />
            <h5 className="mt-3 mb-3">{service.name}</h5>
            <p className="text-secondary">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, quaerat?</p>onMouseLeave={() => set({ xys: [0, 0, 1] })}
                style={{ transform: props.xys.interpolate(trans) }} */}

            <animated.div className="card"
                onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
                onMouseLeave={() => set({ xys: [0, 0, 1] })}
                style={{ transform: props.xys.interpolate(trans) }}>

                <div className="card h-100" style={{ width: '18rem' }}>
                    <img style={{ height: '200px' }} className="card-img-top img-fluid" src={image} alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title">Service: {name}</h5>
                        <h5 className="card-title">Charge: ${price}</h5>
                        <p className="card-text">{description}</p>
                        {/* <a href="#" className="btn btn-success">Get Service</a> */}
                        <Link to={`/checkout/${_id}`}><button className="btn btn-success">Get Service</button></Link>
                    </div>
                </div>
            </animated.div>
        </div>


    );
};

export default ServiceDetails;