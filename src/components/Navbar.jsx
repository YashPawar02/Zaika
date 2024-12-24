import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { PiSignIn } from "react-icons/pi";
import { useDispatch } from "react-redux";
import { setSearch } from "../Redux/Slices/SearchSlice";
import AuthForm from "./AuthForm";
import { MdOutlineDinnerDining } from "react-icons/md";
import { IoHelpBuoyOutline } from "react-icons/io5";
import { IoIosInformationCircleOutline } from "react-icons/io";

const Navbar = () => {
  const dispatch = useDispatch();
  const [isAuthFormOpen, setAuthFormOpen] = useState(false);

  const handleAuthIconClick = () => {
    setAuthFormOpen(true);
  };

  const handleClose = () => {
    setAuthFormOpen(false);
  };

  return (
    <>
      <nav className="p-4 w-full">
        <ul className="flex flex-col md:flex-row items-center justify-around gap-4 md:gap-12 w-full">
          <li className="flex items-center hover:text-orange-700 cursor-pointer border border-black rounded-md overflow-hidden p-1 w-full md:w-auto">
            <CiSearch size={30} className="inline" />
            <input
              type="search"
              name="search"
              id=""
              placeholder="Search Here"
              autoComplete="off"
              onChange={(e) => dispatch(setSearch(e.target.value))}
              className="outline-none p-1 w-full h-full bg-transparent text-black md:w-auto"
            />
          </li>
          <li className="hover:text-orange-500 cursor-pointer w-full md:w-auto text-center uppercase">
            <Link to="/restaurants"><MdOutlineDinnerDining className="inline mr-2" size={30} />Restaurants</Link>
          </li>
          <li className="hover:text-orange-500 cursor-pointer w-full md:w-auto text-center uppercase">
            <Link to="/help"><IoHelpBuoyOutline className="inline mr-2" size={30} />Help</Link>
          </li>
          <li className="hover:text-orange-500 cursor-pointer w-full md:w-auto text-center uppercase">
            <Link to="/aboutus"><IoIosInformationCircleOutline className="inline mr-2" size={30} />About US</Link>
          </li>
          
          <li className="hover:text-orange-500 cursor-pointer w-full md:w-auto text-center">
            <PiSignIn size={30}  className="inline" onClick={handleAuthIconClick} />
            <a href="#" onClick={handleAuthIconClick} className="ml-2 uppercase">Login</a>
          </li>
          
        </ul>
        <AuthForm isOpen={isAuthFormOpen} onClose={handleClose} />
      </nav>
    </>
  );
};

export default Navbar;

