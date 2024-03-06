import React from "react";
import logo from "../../assets/Logo.svg";
import { useStateValue } from "../../MyContexts/StateProvider";

const Navbar = () => {
  // const [{ token }, dispatch] = useStateValue();

  const handleClick = () => {
    dispatch({
      type: "SET_TOKEN",
      token: null,
    });
  };

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
          className="bg-sky-500 h-[50px] w-[120px] hover:bg-orange-500 duration-150 active:bg-elite-black duration-150 text-white font-bold py-2 px-4 rounded-full mr-2"
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
  
};

export default Navbar;
