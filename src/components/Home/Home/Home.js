import React from 'react';
import Footer from '../../Footer/Footer/Footer';
import BusinessInfo from '../BusinessInfo/BusinessInfo';
import Header from '../Header/Header/Header';
import Reviews from '../Reviews/Reviews';
import Services from '../Services/Services';
import Team from '../Team/Team';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Services></Services>
            <BusinessInfo></BusinessInfo>
            <Reviews></Reviews>
            <Team></Team>
            <Footer></Footer>
        </div>
    );
};

export default Home;