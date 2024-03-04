import React from 'react';

const Input = () => {
  return (
    <div className="relative">
      <input
        className="shadow border-[4px] border-gray-700 rounded-full py-4 w-[600px] px-3 text-lite-gray bg-dark-gray focus:shadow-outline"
        id="username"
        type="text"
        placeholder="Enter the link here"
      />
      <button className="bg-bright-blue h-[50px] w-[150px] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full -ml-[157px]">
        Shorten Now!
      </button>
    </div>
  );
};

export default Input;
