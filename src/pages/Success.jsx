import React, { useState } from "react";
import { useEffect } from "react";
import { HashLoader } from "react-spinners";
import { useNavigate } from "react-router-dom";

const Success = () => {
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  const handleBackToHome = () => {
    navigate("/"); // Replace "/" with the path to your home page
  };

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <>
    
    <div className="flex flex-col items-center justify-center h-screen">

      {
        loading ? <HashLoader color="#ff7a04" size={80} /> : <div>
       
        <h2 className="text-3xl text-center font-semibold mb-4 text-green-500">
          Order Successfull!!
        </h2>
        <p className="text-3xl text-gray-800">
          Your Order Has Been Palced Succesfully....
        </p>
      </div>
      }
      
      <button
        onClick={handleBackToHome}
      className="h-10 text-base border  border-black p-2 m-11 rounded-lg hover:bg-orange-500 transition-all duration-200">Back To Home</button>
    </div>
      </>
  );
};

export default Success;
