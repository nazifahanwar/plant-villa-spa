import React from 'react';
import { FaStar } from 'react-icons/fa';

const PlantDetailsCard = ({plant}) => {
const {providerName,description,careLevel,availableStock,price,category,plantName,rating,image} = plant;
const handConsult=(e)=>{
    e.preventDefault();
    e.target.reset();
    alert('success!!!')
}
    return (
        <div className=' bg-[#a3b18a] '>
        <div className="flex flex-col md:flex-row gap-6 p-3   container mx-auto">
  <div className="md:w-1/2">
    <img src={plant.image} alt={plant.plantName} className="w-full h-96 object-cover rounded-xl" />
  </div>

  <div className="md:w-1/2 flex flex-col justify-between">
    <div>
        <div className='flex items-center justify-between'>
      <h1 className="text-3xl text-white font-bold">{plant.plantName}</h1>
      <p className={plant.availableStock > 0 ? 'text-accent bg-gray-100 rounded-md p-1 text-sm border shadow-sm' : 'text-red-500 bg-gray-200 rounded-md p-1 border shadow-sm '}>
  {plant.availableStock > 0
    ? `In stock:${plant.availableStock} ${plant.availableStock>1 ? 'pieces' : 'piece'}`
    : 'Out of Stock'}
</p></div>
      <p className=" text-white text-lg">{plant.category}</p>
      <div className='flex items-center'><FaStar className='text-2xl text-[#344e41]'/><p className="text-[#344e41] mt-2 font-normal text-xl">{plant.rating}</p></div>
    </div>

    <div className="mt-6 flex flex-col gap-2">
      <p className="text-gray-100 text-lg">{plant.description}</p>
      <p className="text-gray-100">Care Level: <span className="font-semibold">{plant.careLevel}</span></p>
      <p className="text-gray-100">Provider: <span className="font-semibold">{plant.providerName}</span></p>
      <p className='text-2xl text-white'>Price:<span className="text-[#344e41] text-3xl font-bold mt-4">${plant.price}</span></p>
      
    </div>
  </div>
</div>
<div className='flex max-sm:flex-col justify-between items-center pb-4 container mx-auto'>
    <div>
        <h2 className='text-3xl text-white font-bold text-center'>Book A Consultation With Us</h2>
        <p className='text-gray-100 text-center'>Book a session with our plant specialists and watch your garden thrive</p>
    </div>
<form onSubmit={handConsult} className="space-y-4 w-2/5 mx-auto bg-white p-5 rounded-md">
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-1">
                Your Name
              </label>
              <input type='name'
                placeholder="Name"
                className="w-full border border-[#344e41] rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#344e41]"
                required
              /></div>
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-1">
                Email
              </label>
              <input name='email'
                type="email"
                placeholder="Email"
                className="w-full border border-[#344e41] rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#344e41]"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-base-300 text-white font-medium py-2 rounded-md hover:bg-gray-800 transition"
            >
              Book Now
            </button>

            </form>
</div>
        
        </div>
    );
};

export default PlantDetailsCard;