import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import Card from '../Components/Card';
import { BiSolidError } from 'react-icons/bi';

const Plants = () => {
const plants = useLoaderData();
const [search,setSearch] = useState('');
const logics = search.trim().toLowerCase();
const searchedPlants = logics? plants.filter(plant=>plant.plantName.trim().toLowerCase().includes(logics)):plants;
console.log(searchedPlants);


const handleSearch = (e) => {
  setSearch(e.target.value);
}
    return (
        <div className='container mx-auto min-h-screen'>
            <div className='flex items-center justify-between py-3'>
                <p className='font-bold text-2xl mt-2'>Explore All Plants</p>
                <label className="mt-3 input input-bordered input-primary focus-within:border-[#344e41]
  ">
  <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g
      strokeLinejoin="round"
      strokeLinecap="round"
      strokeWidth="2.5"
      fill="none"
      stroke="currentColor"
    >
      <circle cx="11" cy="11" r="8"></circle>
      <path d="m21 21-4.3-4.3"></path>
    </g>
  </svg>
  <input type="search" value={search} onChange={handleSearch} required placeholder="Search Plants" />
</label>
            </div>
            
  {searchedPlants.length !== 0 ? (
  <div className="grid grid-cols-2 md:grid-cols-4 gap-5 container mx-auto py-5">
    {searchedPlants.map((plant) => (
      <Card key={plant.plantId} plant={plant} />
    ))}
  </div>
) : (<div className='flex flex-col justify-center items-center min-h-screen'>
    <BiSolidError className='text-9xl text-accent'/><p className='text-accent'>No Plant Found</p>
</div>)}
           
        </div>
    );
};

export default Plants;