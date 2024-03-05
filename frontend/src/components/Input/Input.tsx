import React from 'react';
import { useNavigate } from 'react-router-dom';

const Input = () => {
  const navigate = useNavigate();
  return (
    <form className="justify-center items-center gap-x-3 sm:flex">
      <input
        className="shadow border-[4px] border-gray-700 rounded-full py-4 px-3 text-lite-gray bg-dark-gray focus:shadow-outline w-[600px]"
        id="username"
        type="text"
        placeholder="Enter your link here"
      />
      <button onClick={() => (navigate('/LogIn'))} className="bg-sky-500 h-[50px] w-[150px] hover:bg-sky-400 text-white font-bold py-2 px-4 rounded-full -ml-[168px] active:bg-sky-600 duration-150">
        Shorten Now!
      </button>
    </form>
  );
};

export default Input;
