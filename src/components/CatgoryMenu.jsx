import { useState } from "react";
import React from "react";
import FoodData from "../Data/FoodData";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCategory } from "../Redux/Slices/CategorySlice";

const CategoryMenu = () => {
  const [categories, setCategories] = useState([]);

  const listUniqueCategories = () => {
    const uniqueCategories = [...new Set(FoodData.map((food) => food.category))];
    setCategories(uniqueCategories);
    console.log(uniqueCategories);
  };

  useEffect(() => {
    listUniqueCategories();
  }, []);

  const dispatch = useDispatch();
  const selectedCategory = useSelector((state) => state.category.category);

  return (
    <>
      <div className="m-6">
        <h3 className="text-4xl font-bold">Find The Best Food.......</h3>
        <div className="my-5 flex flex-wrap gap-4 justify-center sm:justify-start">
          <button
            onClick={() => dispatch(setCategory("All"))}
            className={`font-light px-7 py-2 bg-gray-500 rounded-3xl hover:bg-green-400 hover:text-white cursor-pointer ${
              selectedCategory === "All" && "bg-green-400"
            }`}
          >
            All
          </button>
          {categories.map((category, index) => {
            return (
              <button
                onClick={() => dispatch(setCategory(category))}
                key={index}
                className={`font-light px-7 py-2 bg-gray-500 rounded-3xl hover:bg-green-400 hover:text-white cursor-pointer ${
                  selectedCategory === category && "bg-green-400"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default CategoryMenu;

