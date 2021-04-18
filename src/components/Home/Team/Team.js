import React from 'react';
import team from '../../../images/team.jpg';

const Team = () => {
    return (
        <section>
            <div className="container">
                <h2 className="text-center text-primary my-5">TEAM</h2>
                <div className="row d-flex align-items-center">

                <div className="col-md-5">
                    <h2 style={{color: '#3A4256'}}>Our Experts<br/> Here.</h2>
                    <p className="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, voluptate. Voluptas error harum tempore saepe.</p>
                </div>

                <div className="col-md-7">
                    <img className="img-fluid" src={team} alt=""/>
                </div>
                </div>
            </div>
        </section>
    );
};

export default Team;