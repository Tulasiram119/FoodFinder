import React, { useContext, useState } from "react";
import { LOGO_URL } from "../utilis/constants";
import { Link } from "react-router-dom";
import UserContext from "../utilis/UserContext";
import { useSelector } from "react-redux";
export default function Header() {
  const [button, setButton] = useState("login");
  const{loggedUser} = useContext(UserContext);
  const cartItems = useSelector((store)=>store.cart.items);
  console.log(cartItems);
  return (
    <div className="flex justify-between bg-blue-100 shadow-lg m-2 sm:bg-pink-200">
      <div className="logo-container">
        <img className="w-56 " src={LOGO_URL} alt="" />
      </div>
      <div className="flex items-center">
        <ul className="flex m-4 p-4">
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            {" "}
            <Link to="/about">About us</Link>{" "}
          </li>
          <li className="px-4">
            <Link to="/contact">Contact us</Link>
          </li>
          <li className="px-4">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4">
            <Link to="/cart">Cart - {cartItems.length}</Link>
            </li>
          <li>
            <button
              type="button"
              className="bg-gray-400 rounded-lg px-2"
              onClick={() => {
                if (button === "login") {
                  setButton("logout");
                } else {
                  setButton("login");
                }
              }}
            >
              {button}
            </button>
          </li>
          <li className="font-bold mx-4" >{loggedUser}</li>
        </ul>
      </div>
    </div>
  );
}
