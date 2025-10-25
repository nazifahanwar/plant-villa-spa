import React from 'react';
import wateringImg from "../assets/watering.jpeg";
import sunlightImg from "../assets/sunlight.jpg";
import fertilizerImg from "../assets/fertilize.avif";
const PlantTips = () => {
    return (
        <div>
            
    <div className="py-12 bg-base-200 px-4">
      <h2 className="text-3xl font-bold text-center text-white">
        Plant Care Tips
      </h2>
      <p className='text-center text-white mb-6'>Nurture your greens with love and attention — the right balance of water, light, and care keeps every leaf smiling.
</p>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">

        <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:scale-105 transform transition duration-300">
          <img
            src={wateringImg}
            className="w-full h-72 object-cover"
          />
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2">Watering Tips</h3>
            <p className="text-accent">
              Water your plants regularly, but avoid overwatering. Most indoor plants thrive when the topsoil is dry before watering again.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:scale-105 transform transition duration-300">
          <img
            src={sunlightImg}
            className="w-full h-72 object-cover"
          />
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2">Sunlight Tips</h3>
            <p className="text-accent">
              Place your plants where they get sufficient light. Some plants prefer indirect sunlight while others love bright, direct rays.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:scale-105 transform transition duration-300">
          <img
            src={fertilizerImg}
            className="w-full h-72 object-cover"
          />
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2">Fertilizing Tips</h3>
            <p className="text-accent">
              Feed your plants with the right fertilizer according to their type. Over-fertilizing can harm the plant.
            </p>
          </div>
        </div>

      </div>
    </div>
    </div>
  );
}

export default PlantTips;

        