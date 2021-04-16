import React from 'react';

const ReviewDetails = (props) => {

    const { name, email ,description, _id} = props.review;

    return (
      <div className="col-md-4">
            <div className="card shadow-sm">
        <div className="card-body">
            <p className="card-text text-center">{description}</p>
        </div>
        <div className="card-footer d-flex  align-items-center">
            {/* <img className="mx-3" src={} alt="" width="60"/> */}
            <div>
                <h6 className="text-primary">{email}</h6>
                <h2 className="m-0">{name}</h2>
            </div>
        </div>
   </div>
      </div>
    );
};

export default ReviewDetails;