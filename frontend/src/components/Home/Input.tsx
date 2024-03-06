import { useNavigate } from "react-router-dom";
import { useState } from "react";
import instance from "../../axios.js";
import { useStateValue } from "../../MyContexts/StateProvider.jsx";
import React from "react";

const Input = () => {
  const navigate = useNavigate();

  const [{ token }, dispatch] = useStateValue();

  const [longURL, setLongURL] = useState("");
  const [shortURL, setShortURL] = useState("");

  const [modalState, setModalState] = useState(false);
  const handleSubmit = (e) => {
    if (token === null || token === "null" || token === undefined) {
      navigate("/LogIn");
    }
    e.preventDefault();
    console.log(longURL);
    const getShortURL = async () => {
      try {
        const response = await instance.post('/api/getShortURL', {
          longURL: longURL
        },
        {
          headers:{
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        }
        )
        setShortURL(response.data.shortURL);
      } catch (error) {
        console.log('Error',error);
        if (error.response.data.msg==="Token has expired") {
          navigate("/LogIn");
        }
      }
      
    };
    getShortURL();
  };

   
      return (
      <>
        <form className="justify-center items-center gap-x-3 sm:flex">
          <input
            className="shadow border-[4px] border-gray-700 rounded-full py-4 px-3 text-lite-gray bg-dark-gray focus:shadow-outline w-[600px]"
            id="username"
            type="text"
            placeholder="Enter your link here"
            value={longURL}
            onChange={(e) => setLongURL(e.target.value)}
          />
          <button
            onClick={(e) => handleSubmit(e)}
            className="bg-sky-500 h-[50px] w-[150px] hover:bg-elite-black text-white font-bold py-2 px-4 rounded-full -ml-[168px] active:bg-sky-600 duration-150"
          >
            Shorten Now!
          </button>
        </form>
        
      </>
    );
  
};

export default Input;
