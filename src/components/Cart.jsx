import React, { useState } from "react";
import { IoCloseCircleOutline } from "react-icons/io5";
import { CiShoppingCart } from "react-icons/ci";
import Itemcard from "./Itemcard";
import { useSelector } from "react-redux";
import {useNavigate} from "react-router-dom";


const Cart = () => {
  const [activeCart, setActiveCart] = useState(false);
  // const [toggle, setToggle] = useState(false);

  const cartItems = useSelector((state) => state.cart.cart);
  const totalQty = cartItems.reduce((totalQty , item)=> totalQty + item.qty,0);
  const totalPrice = cartItems.reduce((total,item) => total+item.qty * item.price, 0);
 
  const navigate = useNavigate();
  // console.log(cartItems);

  // const showSidemenu = () => {
  //   setToggle(true);
  // };

  // const hideSidemenu = () => {
  //   setToggle(false);
  // };

  // onClick={hideSidemenu}
  //       style={{
  //         opacity: toggle ? 1 : 0,
  //         visibility: toggle ? "visible" : "hidden",
  //       }}

  return (
    <div>
      
      <div

        className={`fixed right-0 top-0 w-full p-5 lg:w-[20vw] bg-gray-100 h-full mb-3 ${
          activeCart ? "translate-x-0" : "translate-x-full"
        } transition-all duration-300`}
        
      >
        <div className="flex justify-between items-center my-2">
          <span className="text-xl font-normal text-gray-900">My Order</span>
          <IoCloseCircleOutline
            onClick={() => {
              setActiveCart(!activeCart);
            }}
            size={30}
            className="font-bold cursor-pointer"
          />
        </div>

        {cartItems.length > 0 ? (
          cartItems.map((food) => {
            return (
              <Itemcard
                key={food.id}
                id={food.id}
                name={food.name}
                price={food.price}
                img={food.img}
                qty={food.qty}
              />
            );
          })
        ) : (
          <h2 className="text-rose-800 font-semibold text-xl mt-20 text-center ">
            Your Cart is Empty...
          </h2>
        )}

        <div className="absolute bottom-0 mb-5">
          <h3 className="font-semibold text-">Items : {totalQty}</h3>
          <h3 className="font-semibold  text-">Total Amount : {totalPrice}</h3>
          <hr className="w-[90vw] lg:w-[18vw] my-2" />
          <button
          onClick={()=>navigate("/success")}
          className="bg-green-500 px-3 text-white  py-2 rounded-lg font-medium w-[90vw] lg:w-[18vw]">
            Check Out
          </button>
        </div>
      </div>
      <CiShoppingCart
        onClick={() => {
          setActiveCart(!activeCart);
        }}
        className={`rounded-full bg-white  shadow-lg shadow-black text-5xl p-3 fixed bottom-10 right-4 cursor-pointer ${totalQty > 0 && " animate-bounce delay-500 transition-all"}`}
      />
    </div>
  );
};

export default Cart;
