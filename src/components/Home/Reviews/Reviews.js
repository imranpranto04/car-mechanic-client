import React, { useEffect, useState } from 'react';
import ReviewDetails from '../ReviewDetails/ReviewDetails';

const Reviews = () => {

    const [reviews, setReviews] = useState([]);

    useEffect( ()=> {
        fetch('http://localhost:5000/reviews')
        .then(res=> res.json())
        .then(data=> setReviews(data));
    }, []);

    return (
        <section className="testimonials my-5 py-5">
        <div className="container">
            <div className="section-header text-center">
                <h5 className="text-primary text-uppercase">Customer Review</h5>
                <h1>What Our Customer <br/> Says </h1>
            </div>
            <div className="row card-deck mt-5">
                 {
                     reviews.map(review => <ReviewDetails  review={review} key={review.name}/>)
                 }
             </div>
        </div>
    </section>
    );
};

export default Reviews;