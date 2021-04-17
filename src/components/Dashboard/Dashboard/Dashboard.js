import React from 'react';
import BookingService from '../BookingService/BookingService';
import Sidebar from '../Sidebar/Sidebar';
import dashboardBg from '../../../images/dashboard.jpg'

// const containerStyle = {
//     backgroundColor: "#F4FDFB",
//     border: '1px solid red'
// }

const Dashboard = () => {
    return (
        <div className="row container-fluid mt-3">
            <Sidebar></Sidebar>
        
            {/* <BookingService></BookingService> */}
            <div className= "col-md-10 text-center text-danger">
            <h2 className= "text-danger">Welcome to Dashboard</h2>
            <img className="img-fluid w-75" src={dashboardBg} alt=""/>
            </div>
    </div>
    );
};

export default Dashboard;