import React, { useEffect, useState } from 'react';
import wil from '../../../images/wil.png';
import ema from '../../../images/ema.png';
import ali from '../../../images/ali.png';
import ReviewDetails from '../ReviewDetails/ReviewDetails';

// const reviewData = [
//     {
//         quote : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
//         name : 'Wilson Harry',
//         from : 'Chattragram',
//         img : wil
//     },
//     {
//         quote : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
//         name : 'Ema Gomez',
//         from : 'Dahaka',
//         img : ema
//     },
//     {
//         quote : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
//         name : 'Aliza Farari',
//         from : 'Mirpur, Dhaka',
//         img : ali
//     }
// ]

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