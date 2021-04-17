import axios from 'axios';
import React, { useState } from 'react';
import Sidebar from '../Dashboard/Sidebar/Sidebar';

const AddService = () => {
    const handleAlert = () => {
        alert('Service added successfully');
    }

    const [imageURL, setImageURL] = useState(null);
    const [info, setInfo] = useState({});

    const handleBlur = e => {
        const newInfo = { ...info };
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
        console.log(newInfo);
    }


    const handleImageUp = (e) => {
        console.log(e.target.files[0]);
        const imageData = new FormData();
        imageData.set('key', '11375d69856927a94c3f9a21637f5bad');
        imageData.append('image', e.target.files[0]);


        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(function (response) {
                setImageURL(response.data.data.display_url);
                // console.log(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData()
        // formData.append('name', info.name);
        // formData.append('price', info.price);
        // formData.append('description', info.description);
        // formData.append('file', imageURL);
        // console.log(info, imageURL);
        // console.log('clicked');
        const serviceData = {
            name: info.name,
            price: info.price,
            description: info.description,
            image: imageURL
        }

        const url = `http://localhost:5000/addService`;
        console.log(serviceData);

        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(serviceData)
        })
            .then(res => console.log('server site response', res));

    }

    return (
        <section className="container-fluid row">
            <Sidebar></Sidebar>

            <div className="col-md-10 p-4 w-75" style={{ position: "absolute", right: 0, backgroundColor: "#77BFC7" }}>
                <h4>Add Services</h4>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label for="exampleInputEmail1">Service Name</label>
                        <input onBlur={handleBlur} type="text" name="name" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Service Name" />

                    </div>
                    <div className="form-group">
                        <label for="exampleInputPassword1">Price</label>
                        <input onBlur={handleBlur} type="number" name="price" className="form-control" id="exampleInputPassword1" placeholder="Service Pice" />
                    </div>
                    <div className="form-group">
                        <label for="exampleInputPassword1">Description</label>
                        <textarea onBlur={handleBlur} type="text" name="description" class="form-control" id="exampleInputPassword1" placeholder="description" />
                    </div>

                    <br />
                    <div className="form-group">
                        {/* <label for="exampleFormControlFile1">Example file input</label> */}
                        <input onChange={handleImageUp} type="file" className="form-control-file" id="exampleFormControlFile1" />
                    </div>

                    <br />
                    <button onClick={handleAlert} type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </section>
    );
};

export default AddService;