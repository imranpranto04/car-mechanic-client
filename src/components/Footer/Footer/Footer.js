import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';
import FooterDetails from '../FooterDetails/FooterDetails';

const Footer = () => {

    const noNamed = [
        {name: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat enim harum explicabo eligendi voluptatibus accusamus." },
        
    ]
    const ourAddress = [
        {name: "Banglamotor - Dhaka" , link: ""},
        {name: "Cars Care" , link: ""},
       
    ]
    const quickLinks = [
        {name: "Auto Repair Shop" , link: "/repair"},
        {name: "Runner Bike" , link: "/repair"},
        {name: "TATA Motors Ltd." , link: "/repair"},
        {name: "Walton Auto Mobile" , link: "/repair"},
        {name: "PHP Automobile" , link: "/repair"},
        {name: "Navana Toyota servive center" , link: "/repair"},
        {name: "Car A/C servicing center" , link: "/repair"}
    ]
    const services = [
        {name: "Brake Service and Repair" , link: "/repair"},
        {name: "Vehicle Maintenance & Inspections" , link: "/repair"},
        {name: "Oil/oil filter changed" , link: "/repair"},
        {name: "Replace air filter" , link: "/repair"},
        {name: "Battery replacement" , link: "/repair"},
        {name: "New tires" , link: "/repair"},
        {name: "Wheels aligned/balanced" , link: "/repair"}
    ]

    return (
        <footer className="footer-area clear-both mt-5">
            <div className="container pt-5">
                <div className="row py-5">
                    <FooterDetails key={1} menuTitle="About Us" menuItems={noNamed} />
                    <FooterDetails key={2} menuTitle="Services" menuItems={services}/>
                    <FooterDetails key={3} menuTitle="Quick Links" menuItems={quickLinks}/>
                    <FooterDetails key={4} menuTitle="Our Address" menuItems={ourAddress}> 
                        <ul className="social-media list-inline">
                            <li className="list-inline-item"><a href="//facebook.com"><FontAwesomeIcon className="icon active-icon" icon={faFacebookF} /></a></li>
                            <li className="list-inline-item"><a href="//google.com"><FontAwesomeIcon className="icon" icon={faGooglePlusG} /></a></li>
                            <li className="list-inline-item"><a href="//instagram.com"><FontAwesomeIcon className="icon" icon={faInstagram} /></a></li>
                        </ul>
                        <div className="mt-5">
                            <h6>Call now</h6>
                            <button className="btn btn-primary">+8801711007007</button>
                        </div>
                    </FooterDetails>
                </div>
                <div className="copyRight text-center">
                    <p>Copyright {(new Date()).getFullYear()} All Rights Reserved</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;