import React from 'react';
import unknown from '../../../images/unknown.jpg';
// import { faStar } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const ReviewDetails = (props) => {

    const { name, email, description, _id } = props.review;

    return (
        <div className="col-md-4 my-3">
            <div className="card shadow-sm h-100">
                <div style={{background: '#F0F8FF'}} className="card-body ">
                    <p className="card-text text-center ">{description}</p>
                </div>
                <div className="card-footer d-flex  align-items-center bg-light">
                    <img className="mx-3" src={unknown} style={{height: '30px'}} alt="" />
                    <div>
                        <p className="text-danger">{email}</p>
                        <h2 className="m-0 text-success">{name}</h2>
                    </div>
                </div>
                {/* <p className="text-center">I give five<FontAwesomeIcon icon={faStar} style={{color: 'tomato'}}/></p> */}
            </div>
        </div>
    );
};

export default ReviewDetails;