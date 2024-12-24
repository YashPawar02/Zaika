import React from "react";
import { MdFastfood } from "react-icons/md";
const ZaikaAd = () => {
  return (
    <div className="flex flex-row items-center justify-between bg-gray-900 text-white px-8 py-6">
      {/* Left Section */}
      <div className="flex-1">
        <MdFastfood size={80} className="text-orange-600 cursor-pointer" />
        <h1 className="text-4xl font-bold">Get the Zaika App now!</h1>
        <p className="text-lg mt-4">
          For best offers and discounts curated specially for you.
        </p>
      </div>

      {/* Right Section */}
      <div className="flex-1 text-center">
        
        <div className="flex justify-center gap-4 mt-6">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3075/3075977.png"
            alt="Burger"
            className="w-12 h-12"
          />
          <img
            src="https://cdn-icons-png.flaticon.com/512/3081/3081913.png"
            alt="Noodles"
            className="w-12 h-12"
          />
          <img
            src="https://cdn-icons-png.flaticon.com/512/3081/3081922.png"
            alt="Salad"
            className="w-12 h-12"
          />
        </div>
        <img
          src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=DummyQRCode" // Placeholder for QR code
          alt="QR Code"
          className="w-38 h-38 mx-auto rounded-lg"
        />
        <p className="text-orange-400 text-lg mt-4">Scan to download</p>
      </div>
    </div>
  );
};

export default ZaikaAd;
