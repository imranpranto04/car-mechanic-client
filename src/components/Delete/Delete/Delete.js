import React, { useEffect, useState } from 'react';
import DeleteItemList from '../DeleteIemList/DeleteItemList';

const Delete = () => {

    const [services, setServices] = useState([]);

    useEffect( ()=> {
        fetch('http://localhost:5000/services')
        .then(res=> res.json())
        .then(data=> setServices(data));
    }, [])

    return (
        <div className="container">
            <h1>Delete Items</h1>
            {/* <h1>Items {products.length}</h1> */}
            {
                services.map(service => <DeleteItemList service={service} key={service._id}></DeleteItemList>)
            }
        </div>
    );
};

export default Delete;