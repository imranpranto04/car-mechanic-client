import React from 'react';

const DeleteItemList = ({service}) => {


    const { name, price, image, _id } = service;
    console.log(service);

    const deleteItem = id => {
        console.log(id);
        fetch(`http://localhost:5000/delete/${id}`, {

            method: 'DELETE'
        })
            .then(res => res.json())
            .then(result => {
                console.log('deleted successfully')
            });
        // console.log(id);
    }
    return (
        <div className="container mt-5">

            <table className="table">
                <thead>
                    <tr>

                        <th scope="col">Product Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>

                        <td className="text-info">{name}</td>
                        <td>{price}</td>
                        <td><button className="btn btn-danger" onClick={() => deleteItem(service._id)} >Delete Item</button></td>
                    </tr>

                </tbody>
            </table>

        </div>
    );
};

export default DeleteItemList;