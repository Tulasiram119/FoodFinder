import React, { useState } from "react";
import { LOGO_URL } from "../utilis/constants";
import { Link } from "react-router-dom";
export default function Header() {
  const [button,setButton] = useState("login");
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src={LOGO_URL}
          alt=""
        />
      </div>
      <div className="nav-items">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li> <Link to="/about">About us</Link> </li>
          <li><Link to="/contact">Contact us</Link></li>
          <li><Link to="/grocery">Grocery</Link></li>
          <li>Cart</li>
          <li><button type="button" onClick={()=>{
            if(button === "login"){
              setButton("logout");
            }else{
              setButton("login");
            }
          }}>{button}</button></li>
        </ul>
        
      </div>
    </div>
  );
}
