import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import PlantDetailsCard from '../Components/PlantDetailsCard';
import { BiSolidError } from 'react-icons/bi';

const PlantDetails = () => {
    const data = useLoaderData();
  const { id } = useParams();
  const [plant, setPlant] = useState(null);
  useEffect(() => {
    const plantDetails = data.find((singlePlant) => singlePlant.plantId == id);
    setPlant(plantDetails);
  }, [data, id]);
if (!plant){
      return (
        <div className='flex flex-col justify-center items-center min-h-screen'>
            <BiSolidError className='text-9xl text-[#344e41]'/><p className='text-[#344e41]'>No Plant Found</p></div>
      )
    }
    return (
        <div>
          <PlantDetailsCard plant={plant}></PlantDetailsCard>
        </div>
    );
};

export default PlantDetails;