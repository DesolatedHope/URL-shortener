import React from "react";
import logo from "../../assets/Logo.svg";
import { useStateValue } from "../../MyContexts/StateProvider";

const Navbar = () => {
  const [{ token }, dispatch] = useStateValue();

  const handleClick = () => {
    dispatch({
      type: "SET_TOKEN",
      token: null,
    });
  };

  if (token) {
    return (
      <div className="sticky top-0 z-50 p-4 flex items-center justify-between backdrop-blur-md backdrop-filter">
        {/* Logo on the left side */}
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="mr-2 h-[100px] w-[150px]" />
        </div>

        {/* Buttons on the right side */}
        <div className="flex items-center">
          <button
            onClick={() => handleClick()}
            className="bg-bright-blue h-[50px] w-[120px] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mr-2"
          >
            Signout
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
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="mr-2 h [100px] w-[150px]" />
        </div>
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
