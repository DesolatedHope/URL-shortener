import React from "react";
import logo from "../../assets/Logo.svg";

const Navbar = () => {
  return (
    <div className="sticky top-0 z-50 p-4 flex items-center justify-between bg-elite-black">
      {/* Logo on the left side */}
      <div className="flex items-center">
        <img src={logo} alt="Logo" className="mr-2 h-[95px] w-[150px]" />
      </div>

      {/* <Input /> */}

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
};

export default Navbar;
