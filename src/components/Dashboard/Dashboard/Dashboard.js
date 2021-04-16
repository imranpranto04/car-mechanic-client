import React from 'react';
import BookingService from '../BookingService/BookingService';
import Sidebar from '../Sidebar/Sidebar';

// const containerStyle = {
//     backgroundColor: "#F4FDFB",
//     border: '1px solid red'
// }

const Dashboard = () => {
    return (
        <div className="row container-fluid">
        <div className= "col-md-2">
            <Sidebar></Sidebar>
        </div>
        <div  className="col-md-10">
            <BookingService></BookingService>
        </div>

    </div>
    );
};

export default Dashboard;