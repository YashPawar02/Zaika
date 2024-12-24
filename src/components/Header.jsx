
import { RxCaretDown } from "react-icons/rx";
import { MdFastfood } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import Navbar from "./Navbar";
import { useLocation } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import LiveLocation from "./LiveLocation";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  

  const showSidemenu = () => {
    setToggle(true);
  };

  const hideSidemenu = () => {
    setToggle(false);
  };

 


  return (
    <>
      <div
        className="black-overlay w-full h-full fixed duration-1000"
        onClick={hideSidemenu}
        style={{
          opacity: toggle ? 1 : 0,
          visibility: toggle ? "visible" : "hidden",
        }}
      >
        <div
          onClick={(e) => {
            e.stopPropagation();
          }}
          className="w-[400px] bg-white h-full absolute duration-700"
          style={{ left: toggle ? "0%" : "-100%" }}
        >
          <RxCross2
            onClick={hideSidemenu}
            size={30}
            className="mx-3 my-3 cursor-pointer"
          />

          <div>
            <LiveLocation/>
          </div>
        </div>
      </div>

      <header className="p-3  shadow-2xl shadow-slate-400 w-full">
        <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center justify-between p-2">
          <div className="flex items-center mb-4 md:mb-0">
            <MdFastfood size={60} className="text-orange-600 cursor-pointer" />
            <span className="mx-4 text-3xl uppercase font-bold">
              <span>Zaik</span>
              <span className="text-orange-600">A.</span>
            </span>
          </div>

          <div className="flex items-center mb-4 md:mb-0 border-2 rounded-lg border-black p-2 ">
           
            <h4 className="fontSize: '14px', margin: 0 uppercase " >Satara</h4> 
           
            <RxCaretDown
              onClick={showSidemenu}
              className="inline duration-1000 cursor-pointer text-xl text-[#fc8091] ml-2"
            />
          </div>

          <Navbar />
        </div>
      </header>
    </>
  );
};

export default Header;



