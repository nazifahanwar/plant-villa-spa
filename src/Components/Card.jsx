import React from 'react';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router';
// image, name, price, rating, and “View Details” button.

const Card = ({plant}) => {
    const {image,plantName,price,rating,plantId} = plant;
    return (
        <div>
            <div className='card bg-white shadow-sm hover:scale-105 transition ease-in-out'>
      <figure className='h-57  max-lg:h-40  overflow-hidden'>
        <img className='md:w-full object-cover bg-cover' src={image}  />
      </figure>
      <div className='card-body'>
        <div className='flex justify-between items-center'>
        <h2 className='card-title max-sm:text-sm hover:text-[#344e41]'>{plantName}</h2>
        </div>
        <div className='card-actions justify-between items-center'>
          <p className='font-bold text-xl hover:text-[#344e41]'>${price}</p>
          <div className='flex gap-1 justify-center items-center'><FaStar className='hover:text-[#344e41] text-accent'/><p className='pt-1 font-medium hover:text-[#344e41]'>{rating}</p>
        </div>
        </div>
            <Link to={`/plant-details/${plantId}`}><button className='p-2 w-full rounded-md bg-base-300 cursor-pointer'><p className='text-white'>View Details</p>
            </button></Link>
        
      </div>
    </div>
        </div>
    );
};

export default Card;