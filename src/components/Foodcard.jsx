import React from 'react'
import { FaStar } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { addToCart } from '../Redux/Slices/CartSlice';

const Foodcard = ({id,desc,name,price,img,rating,handleToast}) => {

  const dispatch=useDispatch();

  return (
    <div className='font-bold w-[250px] bg-white p-5 flex flex-col rounded-md gap-2 border border-black '>
      <img src={img} alt="" className='w-auto h-[130px] hover:scale-110 cursor-grab transition-all duration-500 ease-in-out  ' />
      <div className='text-sm flex justify-between'>
        <h2>{name}</h2>
        <span className='text-green-400'>₹{price}</span>
        </div> 
        <p className='text-sm font-normal'>{desc.slice(0, 70)}......</p>
        <div className='flex justify-between'>
            <span className='flex justify-center items-center'>
            <FaStar className='mr-1 text-yellow-400'/>{rating}
            </span>
            <button onClick={()=>{
              dispatch(addToCart({id,name,img,price,rating, qty:1})); 
              handleToast(name);
            }} className='p-1 border border-black rounded-lg bg-green-400 text-base font-thin'>Add To Cart</button>
            </div> 
    </div>
  )
}

export default Foodcard