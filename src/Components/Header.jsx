import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import store from "./Store/Store";
const Header = () => {
  const selector = useSelector((store) => store.cart.items);
  const qty = useSelector((store) => store.cart.totalQty);
  //bg-gradient-to-r from-cyan-700 to-cyan-900 .... transition-transform transform hover:scale-105

  return (
    <header className=" mx-4 mt-4 scale-90 border-b  border-stone-700 rounded-3xl  bg-white text-black p-4 transition-bg  hover:text-white  transition-all hover:bg-gray-900 hover:scale-105">
      <div className="container  ">
        <div className="flex justify-around items-center m-0 p-0">
          <div className="logo">
            <Link to="/">
              <img
                className="h-20 w-20 rounded-full  transition-transform transform hover:scale-75 "
                src={logo}
                alt="no"
              />
            </Link>
          </div>
          <div>
            <h1 className="text-md font-extrabold leading-tight transition-transform transform hover:scale-125  hover:text-slate-300  ">
              Food Heist
            </h1>
            <p className="mt-0 text-md transition-transform transform hover:scale-90  hover:text-slate-300">
              A single stop for your food cravings
            </p>
          </div>
          <nav className="flex items-center space-x-6">
            <Link
              to="/"
              className="text-md p-2 rounded-xl font-bold hover:text-purple-800  hover:bg-white transition-transform transform hover:scale-75"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-md p-2 rounded-xl font-bold hover:text-purple-800 hover:bg-white transition-transform transform hover:scale-75"
            >
              About
            </Link>

            <Link
              to="/profile"
              className="text-md p-2 rounded-xl font-bold hover:text-purple-800 hover:bg-white transition-transform transform hover:scale-75"
            >
              Profile
            </Link>
            <Link
              to="/Contact"
              className="text-md p-2 rounded-xl font-bold hover:text-purple-800 hover:bg-white transition-transform transform hover:scale-75"
            >
              Contact
            </Link>
          </nav>
          <div className="flex items-center">
           
           <Link to='/login'>
           <button className="p-2 rounded-xl hover:bg-white hover:text-purple-800 text-md font-bold transition-transform transform hover:scale-75">
              Log In
            </button>
           
           
           
           </Link>
           
          

            <Link to="/cart">
              <button className="p-2 rounded-xl hover:bg-white hover:text-purple-800 text-md font-bold transition-transform transform hover:scale-75">
                Cart{"--" + qty}
              </button>
            </Link>

            {/* <button className="ml-4 p-2 hover:bg-white hover:text-purple-800 text-md font-bold ">Sign Up</button> */}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

// hover: text-gray-300::::leading-tight::line height
