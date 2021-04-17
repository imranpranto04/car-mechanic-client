import React from 'react';
import { Elements, CardElement } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import SimpleComponent from './SimpleCardForm';


const stripePromise = loadStripe('pk_test_51Igv56FI4lsr5nAKqcH574nuZfYBzeDc3fYVoWtu0sLsLWVEY4kDd5NsgA62bK6cWyFaXCNrG016sKmRIIHxVWi700IH9M8enq');

const ProcessPayment = () => {

    return (
        <Elements stripe={stripePromise}>
           
            <SimpleComponent />
        </Elements>
    );
};

export default ProcessPayment;