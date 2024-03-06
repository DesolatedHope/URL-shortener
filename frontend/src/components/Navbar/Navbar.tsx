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

  return (
    <div className="sticky top-0 z-50 p-4 flex items-center justify-between backdrop-blur-md backdrop-filter">
      {/* Logo on the left side */}
      <div className="flex items-center">
        <img src={logo} alt="Logo" className="mr-2 h-[100px] w-[150px]" />
      </div>

      {/* Buttons on the right side */}
      <div className="flex items-center">
        <button
          className="bg-gradient-to-r from-fuchsia-600 to-purple-600 h-[50px] w-fit hover:bg-orange-500 duration-150 active:bg-elite-black text-white font-bold py-2 px-4 rounded-full mr-2"
        >
          Get Premium
        </button>
        <button
          onClick={() => handleClick()}
          className="bg-gradient-to-r from-fuchsia-500 to-cyan-500 h-[50px] w-fit hover:bg-orange-500 duration-150 active:bg-elite-black duration-150 text-white font-bold py-2 px-4 rounded-full mr-2"
        >
          Signout
        </button>
      </div>
    </div>
  );
};

export default Navbar;
