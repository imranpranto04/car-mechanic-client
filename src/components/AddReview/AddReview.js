import React, { useState } from 'react';
import Sidebar from '../Dashboard/Sidebar/Sidebar';

const AddReview = () => {

    const [review, setreview] = useState({});

    const handleBlur = e => {
        const newReview = { ...review };
        newReview[e.target.name] = e.target.value;
        setreview(newReview);
        console.log(newReview);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData()
        
        const reviewData = {
            name: review.name,
            email: review.email,
            description: review.description,
        }
        const url = `http://localhost:5000/addReview`;
        console.log(reviewData);

        fetch(url,{
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(reviewData)
        })
        .then(res=> console.log('server site response', res));
    }

    return (
        <section className="container-fluid row">
            <Sidebar/>

            <div className="col-md-10 p-4 w-75" style={{ position: "absolute", right: 0, backgroundColor: "#77BFC7" }}>
            <h4>Add Review</h4>

            <form onSubmit={handleSubmit}>
                
                <div className="form-group">
                    <label for="exampleInputEmail1">Service Name</label>
                    <input onBlur={handleBlur} type="text" name="name" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Your Name" />

                </div>
                <div className="form-group">
                    <label for="exampleInputPassword1">Email</label>
                    <input onBlur={handleBlur} type="email" name="email" className="form-control" id="exampleInputPassword1" placeholder="Enter your email" />
                </div>
                <div className="form-group">
                    <label for="exampleInputPassword1">Description</label>
                    <textarea onBlur={handleBlur} type="text" name="description" class="form-control" id="exampleInputPassword1" placeholder="description" />
                </div>

                <br />
                
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
        </section>
    );
};

export default AddReview;