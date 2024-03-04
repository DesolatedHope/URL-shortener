import React from "react";
import { Input } from "../index";
import logo from "../../assets/Logo.svg";

const Navbar = () => {
  const auth = true;
  if (auth) {
    return (
      <div className="p-4 flex items-center justify-between bg-slate-50">
        {/* Logo on the left side */}
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="mr-2" />
        </div>

        {/* Input Component in the center */}
        <Input />

        {/* Buttons on the right side */}
        <div className="flex items-center">
          <button className="bg-bright-blue h-[50px] w-[120px] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mr-2">
            Welcome
          </button>
          <button className="bg-bright-pink text-white p-2 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-8 w-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    );
  } else {
    return (
      <div className="w-full bg-transparent z-50 flex py-6 bg-[#0B101B] justify-between items-center navbar">
        <p className="ml-10 text-[40px] text-transparent bg-gradient-to-r from-bright-pink to-bright-blue bg-clip-text font-bold justify-center z-50 center">
          Shorty-URL
        </p>
        <ul className="list-none sm:flex hidden justify-end items-center flex-1">
          <li className="font-poppins font-bold cursor-pointer text-[16px] text-white mr-5">
            <button className="bg-dark-gray font-bold hover:bg-bright-blue text-lite-gray h-[50px] w-[125px] hover:text-white py-2 px-8 border-3 border-elite-black hover:border-transparent rounded-full">
              Log In
            </button>
          </li>
          <li className="font-poppins font-normal cursor-pointer text-[16px] text-white mr-5">
            <button className="bg-bright-blue shadow-bright-blue h-[50px] w-[150px] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
              Register Now
            </button>
          </li>
        </ul>
      </div>
    );
  }
};

export default Navbar;
