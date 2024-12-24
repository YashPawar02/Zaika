import React from "react";
import Foodcard from "./Foodcard";
import FoodData from "../Data/FoodData";
import toast, { Toaster } from 'react-hot-toast';
import { useSelector } from "react-redux";


const FoodItem = () => {
  
  const handleToast=(name)=> toast.success(`${name} added to cart`);
  const search=useSelector((state)=> state.search.search);
  // console.log(search)
  const category = useSelector((state)=>state.category.category);

  return (
    <>
    <Toaster
  position="top-center"
  reverseOrder={false}
/>
    <div className="flex flex-wrap gap-10 justify-center lg:justify-start  bg-gradient-to-tl from-[#9c5337ee] via-[#f6d6bf] to-[#fdba74]">
      {FoodData.filter((food)=>{
        if(category === "All"){
          return food.name.toLowerCase().includes(search.toLowerCase());
        }else{
          return category=== food.category && food.name.toLowerCase().includes(search.toLowerCase());
           
        }
      }).map((food)=>( <Foodcard 
        key={food.id}
        id={food.id}
        name={food.name}
        price={food.price}
        desc={food.desc}
        rating={food.rating}
        img={food.img}
        handleToast={handleToast}
        />))
      }   

{/* 
      FoodData.map((food) => {
        return (
          <Foodcard 
          key={food.id}
          id={food.id}
          name={food.name}
          price={food.price}
          desc={food.desc}
          rating={food.rating}
          img={food.img}
          handleToast={handleToast}
          />
        );
      })     */}
    </div>
</>
  );
};

export default FoodItem;
