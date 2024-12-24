import React, { useState, useEffect } from "react";

const LiveLocation = () => {
  const [location, setLocation] = useState({ latitude: null, longitude: null });
  const [address, setAddress] = useState({ city: "", state: "", country: "" });
  const [error, setError] = useState(null);
  const [currentTime, setCurrentTime] = useState(new Date());

  const fetchAddress = async (lat, lon) => {
    try {
      const response = await fetch(
        `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lon}&localityLanguage=en`
      );
      const data = await response.json();
      setAddress({
        city: data.city || "N/A",
        state: data.principalSubdivision || "N/A",
        country: data.countryName || "N/A",
      });
    } catch (err) {
      setError("Failed to fetch address details. Please try again.");
    }
  };

  useEffect(() => {
    // Update time every second
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // Request live location
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocation({ latitude, longitude });
          fetchAddress(latitude, longitude);
        },
        (error) => {
          if (error.code === 1) {
            setError("Permission denied. Please allow location access.");
          } else if (error.code === 2) {
            setError("Position unavailable. Please check your device settings.");
          } else if (error.code === 3) {
            setError("Timeout. Please try again.");
          } else {
            setError("An unknown error occurred.");
          }
        }
      );
    } else {
      setError("Geolocation is not supported by this browser.");
    }

    // Cleanup the timer
    return () => clearInterval(timer);
  }, []);

  return (
    <div style={{ fontFamily: "Arial, sans-serif", textAlign: "center", margin: "20px" }}>
    
      <h2 className="mt-3 bg-[black] text-white border border-black rounded-lg p-2">Date : {currentTime.toLocaleDateString()}</h2>
      <h2 className="mt-3 bg-[black] text-white border border-black rounded-lg p-2">Time : {currentTime.toLocaleTimeString()}</h2>
      {error ? (
        <p style={{ color: "red" }}>Error: {error}</p>
      ) : location.latitude && location.longitude ? (
        <div>
            
          <p className="mt-3 bg-[black] text-white border border-black rounded-lg p-2">Latitude: {location.latitude}</p>
          <p className="mt-3 bg-[black] text-white border border-black rounded-lg p-2">Longitude: {location.longitude}</p>
          <p className="mt-3 bg-[black] text-white border border-black rounded-lg p-2">City: {address.city}</p>
          <p className="mt-3 bg-[black] text-white border border-black rounded-lg p-2">State: {address.state}</p>
          <p className="mt-3 bg-[black] text-white border border-black rounded-lg p-2">Country: {address.country}</p>
        </div>
      ) : (
        <p>Fetching location...</p>
      )}
    </div>
  );
};

export default LiveLocation;
