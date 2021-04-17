import React from 'react';
import InfoCard from '../InfoCard/InfoCard';
import { faClock, faMapMarker, faPhone } from '@fortawesome/free-solid-svg-icons'

const infoData = [
    {
        title: 'Opening Hours',
        description: 'We are open 7 days',
        icon: faClock,
        background: 'primary'
    },
    {
        title: 'Visit Our Location',
        description: 'Banglamotor, Dhaka',
        icon: faMapMarker,
        background: 'dark'
    },
    {
        title: 'Call us now',
        description: '+8801711007007',
        icon: faPhone,
        background: 'primary'
    }
]

const BusinessInfo = () => {
    return (
        <section>
            <h4 className="text-center text-primary mt-5">Business Information</h4>
            <div className="d-flex justify-content-center mt-5">
                <div className="w-75 row">
                    {
                        infoData.map(info => <InfoCard info={info} key={info.title}></InfoCard>)
                    }
                </div>
            </div>
        </section>
    );
};

export default BusinessInfo;