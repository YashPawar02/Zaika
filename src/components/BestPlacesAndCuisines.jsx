import React from 'react';

const BestPlacesAndCuisines = () => {
  return (
    <div className="p-4 bg-gradient-to-tl from-[#c18c77] via-[#f6d6bf] to-[#fdba74]">
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Best Places to Eat Across Cities</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {["Bangalore", "Pune", "Mumbai", "Delhi", "Hyderabad", "Kolkata", "Chennai", "Chandigarh", "Ahmedabad", "Jaipur", "Nagpur"].map((city) => (
            <button
              key={city}
              className="w-full py-2 px-4 border border-black rounded-md hover:bg-gray-100"
            >
              Best Restaurants in {city}
            </button>
          ))}
          <button className="w-full py-2 px-4 border border-black rounded-md hover:bg-gray-100">
            Show More
          </button>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">Best Cuisines Near Me</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {[
            "Chinese Restaurant",
            "South Indian Restaurant",
            "Indian Restaurant",
            "Kerala Restaurant",
            "Korean Restaurant",
            "North Indian Restaurant",
            "Seafood Restaurant",
            "Bengali Restaurant",
            "Punjabi Restaurant",
            "Italian Restaurant",
            "Andhra Restaurant",
          ].map((cuisine) => (
            <button
              key={cuisine}
              className="w-full py-2 px-4 border border-black rounded-md hover:bg-gray-100"
            >
              {cuisine} Near Me
            </button>
          ))}
          <button className="w-full py-2 px-4 border border-black rounded-md hover:bg-gray-100">
            Show More
          </button>
        </div>
      </div>
    </div>
  );
};

export default BestPlacesAndCuisines;
