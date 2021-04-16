import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';


const Checkout = () => {

    const { _id } = useParams();
    const [showService, setShowServie] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    useEffect(() => {
        fetch(`http://localhost:5000/services${_id}`)
            .then(res => res.json())
            .then(data => setShowServie(data));
    }, [])
    
    const orderClick = () =>{
        const orderInfo = { ...loggedInUser, ...showService, time: new Date()}
        console.log(orderInfo);
        fetch(`http://localhost:5000/addOrder`,{
            method: 'POST',
            headers: {
                'Content-type' : 'application/json'
            },
            body: JSON.stringify(orderInfo)
    
        })
        .then(res=> res.json())
        .then(data=> console.log(data));
    };


    return (
        <div className="container">
            <h2>Checkout</h2>

            <table className="table">
                <thead className="thead-light">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Service Name</th>
                        <th scope="col">Price</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>{showService.name}</td>
                        <td>${showService.price}</td>
                    </tr>
                  
                    <tr>
                        <th scope="row"></th>
                        <td><b>Total</b></td>
                        <td></td>
                        <td><b>${showService.price}</b></td>
                    </tr>
                </tbody>
            </table>
            <div className="d-flex justify-content-end">
            <button onClick={orderClick} className="btn btn-danger"><Link className="text-white" link to="/order">Order</Link></button>
            
            </div>
        </div>
    );
};

export default Checkout;