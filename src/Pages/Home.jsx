import React from 'react';
import Banner from '../Components/Banner';
import Category from '../Components/Category';
import FeatureSection from '../Components/FeatureSection';

const Home = () => {
    return (
        <div>
            <Banner/>
            <FeatureSection/>
            <Category/>
        </div>
    );
};

export default Home;