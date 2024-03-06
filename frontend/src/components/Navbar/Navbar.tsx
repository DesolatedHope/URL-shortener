import React from "react";
import logo from "../../assets/Logo.svg";
import { useStateValue } from "../../MyContexts/StateProvider";
import instance from "../../axios";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [{ token,premium }, dispatch] = useStateValue();

  const navigate = useNavigate();

  const handleClick = () => {
    dispatch({
      type: "REMOVE_TOKEN",
      token: false,
    });
  };

  const handlePremium=()=>{
    const getPremium=async()=>{
      try{
        const response=await instance.post('/api/getPremium','hello',{
          headers:{
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        })
        dispatch({
          type: "SET_PREMIUM",
          token:token,
          premium: response.data.premium,
        });
      }catch(error){
        console.error("Error fetching premium data:",error);
        if(error.response.data.msg==="Token has expired"){
          dispatch({
            type: "SET_TOKEN",
            token: null,
            premium:false
          });
          navigate("/LogIn");
        }
      }
    }
    getPremium();
  }

  return (
    <div className="sticky top-0 z-50 p-4 flex items-center justify-between backdrop-blur-md backdrop-filter">
      {/* Logo on the left side */}
      <div className="flex items-center">
        <img src={logo} alt="Logo" className="mr-2 h-[100px] w-[150px]" />
      </div>

      {/* Buttons on the right side */}
      <div className="flex items-center">
        {token!=null && token!='null' && token !=undefined && token !='undefined' && (!premium || premium==='false') && <button
          onClick={() => handlePremium()}
          className="bg-yellow-500 h-[50px] w-fit hover:bg-orange-500 duration-150 active:bg-elite-black duration-150 text-white font-bold py-2 px-4 rounded-full mr-2"
        >
          Get Premium
        </button>}
        <button
          onClick={() => handleClick()}
          className="bg-sky-500 h-[50px] w-fit hover:bg-orange-500 duration-150 active:bg-elite-black duration-150 text-white font-bold py-2 px-4 rounded-full mr-2"
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
