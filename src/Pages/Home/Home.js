import React from 'react';
import About from './About/About';
import Banner from './Banner/Banner';
import MoreServices from './MoreServices/MoreServices';
import PopularProduct from './PopularProduct/PopularProduct';
import Services from './Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Services></Services>
            <MoreServices></MoreServices>
            <PopularProduct></PopularProduct>

        </div>
    );
};

export default Home;