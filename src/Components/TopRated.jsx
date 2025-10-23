import React from 'react';
import { useLoaderData } from 'react-router';
import Card from './Card';


const TopRated = () => {
    const data = useLoaderData();
    const copyData = [...data]
    const topRated = copyData.sort((a,b)=> b.rating - a.rating).slice(0,8);
    console.log(topRated);
    return (
        <div>
            <div className='bg-base-300'>
         <h2
        className="text-3xl font-bold pt-5 text-center text-white">Our Top Rated Plants
      </h2>
      <p className='text-accent py-2 text-center text-gray-300'>
        Handpicked greenery,rated best by our community.
      </p> 
            </div>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-5 container mx-auto py-5'>
           {topRated.map(plant => <Card key={plant.plantId} plant={plant}/>)} 
        </div>
        </div>
    );
};

export default TopRated;