import React, { useEffect, useState } from 'react';
import Sidebar from '../../Dashboard/Sidebar/Sidebar';
import DeleteItemList from '../DeleteIemList/DeleteItemList';

const Delete = () => {

    const [services, setServices] = useState([]);

    useEffect( ()=> {
        fetch('http://localhost:5000/services')
        .then(res=> res.json())
        .then(data=> setServices(data));
    }, [])

    return (
        <section className="container-fluid row">
            <Sidebar></Sidebar>

           <div className="col-md-10p-4 w-75" style={{ position: "absolute", right: 0, backgroundColor: "#E5E4E2" }}>            
           <h1>Delete Items</h1>
            {/* <h1>Items {products.length}</h1> */}
            {
                services.map(service => <DeleteItemList service={service} key={service._id}></DeleteItemList>)
            }
           </div>
        </section>
    );
};

export default Delete;