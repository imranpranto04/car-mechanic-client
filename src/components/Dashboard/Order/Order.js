import React, { useEffect, useState } from 'react';
import BookingService from '../BookingService/BookingService';
import Sidebar from '../Sidebar/Sidebar';

const Order = () => {

    const [order, setOrder] = useState([]);

    useEffect( ()=>{

        fetch('http://localhost:5000/orders')
        .then(res => res.json())
        .then(data => setOrder(data));
    }, [])

    return (
        <section className="container-fluid row">
            <Sidebar></Sidebar>

            <div className="col-md-10 p-4 w-75" style={{ position: "absolute", right: 0, backgroundColor: "#E5E4E2" }}>
            <h2>Order Services Here</h2>
            <h4>Total Services: {order.length}</h4>
            <div className="row">
                {
                    order.map(order => <BookingService order={order} />)
                }
                
            </div>
            </div>

        </section>
    );
};

export default Order;