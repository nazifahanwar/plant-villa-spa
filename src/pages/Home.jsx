import React from 'react';
import Hero from '../Components/Hero/Hero';
import { useLoaderData } from 'react-router';

const Home = () => {
    const data = useLoaderData();
    
    
    return (
        <div className='min-h-screen'>
            <Hero/>
        </div>
    );
};

export default Home;