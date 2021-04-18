import React from 'react';
import banner from '../../../../images/banner.jpg'
import './HeaderMain.css';



const HeaderMain = () => {

    return (
        <section className="">
            <div className="container ">
                <div className="row d-flex align-items-center">

                <div className="col-md-5 headerMain">
                    <h2 style={{color: '#3A4256'}}>You will <br/> Get Best from us.</h2>
                    <p className="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, voluptate. Voluptas error harum tempore saepe.</p>
                </div>

                <div className="col-md-7">
                    <img className="img-fluid" src={banner} alt=""/>
                </div>
                </div>
            </div>
        </section>
    );
};

export default HeaderMain;