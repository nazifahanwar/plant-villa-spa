import React from 'react';
import Hero from '../Components/Hero/Hero';
import TopRated from '../Components/TopRated'
import PlantTips from '../Components/plantTips';
import Experts from '../Components/Experts';
import Facilities from '../Components/Facilities';
import NewsLetter from '../Components/NewsLetter';

const Home = () => {
    
    
    
    
    return (
        <div className='min-h-screen'>
            <Hero/>
            <TopRated/>
            <PlantTips/>
            <Experts/>
            <NewsLetter/>
            <Facilities/>
        </div>
    );
};

export default Home;