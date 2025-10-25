import React from "react";
import expert1 from "../assets/expert3.jpg";
import expert2 from "../assets/professional-lawyer.jpg";
import expert3 from "../assets/medium-shot-beautiful-woman-posing.jpg";
import expert4 from "../assets/portrait-young-bearded-man-reading-book.jpg";

const Experts = () => {
  return (
    <div className="py-12 px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800">Meet Our Green Experts</h2>
        <p className="text-gray-600 mt-2 max-w-xl mx-auto">
          Our plant care specialists are passionate about helping your greens grow healthy, happy, and radiant. 
        </p>
      </div> 
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        
        <div className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-lg transition duration-300">
          <img
            src={expert1}
            className="w-32 h-32 mx-auto rounded-full object-cover mb-4 border-4 border-primary"
          />
          <h3 className="text-lg font-semibold text-gray-800">Lara Bloom</h3>
          <p className="text-primary text-sm mt-1">Watering Specialist</p>
        </div>

        <div className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-lg transition duration-300">
          <img
            src={expert2}
            className="w-32 h-32 mx-auto rounded-full object-cover mb-4 border-4 border-primary"
          />
          <h3 className="text-lg font-semibold text-gray-800">Ethan Leaf</h3>
          <p className="text-primary text-sm mt-1">Sunlight Advisor</p>
        </div>

        <div className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-lg transition duration-300">
          <img
            src={expert3}
            alt="Expert 3"
            className="w-32 h-32 mx-auto rounded-full object-cover mb-4 border-4 border-primary"
          />
          <h3 className="text-lg font-semibold text-gray-800">Mia Fern</h3>
          <p className="text-primary text-sm mt-1">Fertilizer Consultant</p>
        </div>

        <div className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-lg transition duration-300">
          <img
            src={expert4}
            alt="Expert 4"
            className="w-32 h-32 mx-auto rounded-full object-cover mb-4 border-4 border-primary"
          />
          <h3 className="text-lg font-semibold text-gray-800">Noah Moss</h3>
          <p className="text-primary text-sm mt-1">Soil & Growth Analyst</p>
        </div>

      </div>
    </div>
  );
};

export default Experts;
