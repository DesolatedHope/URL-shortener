import React from 'react';
import {
  Link
} from "react-router-dom";

const SignIn = () => {
  return (
    <div className="flex h-screen items-center justify-center bg-gray-700">
      <div className="bg-gray-800 flex flex-col justify-center p-8 sm:w-1/2 rounded-lg">
        <form className="max-w-md w-full mx-auto bg-gray-900 p-8 rounded-lg">
          <h2 className="text-4xl text-white font-bold text-center mb-4">LOGIN</h2>
          <div className="flex flex-col text-gray-400 mb-4">
            <label htmlFor="username">User name</label>
            <input
              type="text"
              id="username"
              className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
            />
          </div>
          <div className="flex flex-col text-gray-400 mb-4">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
            />
          </div>
          <button className="w-full py-2 bg-teal-500 hover:bg-teal-600 text-white font-semibold rounded-lg">
            Log In
          </button>
          <p className='my-2 text-gray-400 mb-4 items-center'>Don't have an account? <Link className = 'ml-2' to="/">Sign Up</Link></p>
          <div className="flex justify-center">
            <button className="py-3 my-1 w-full bg-teal-500 hover:bg-teal-600 text-white font-semibold rounded-lg">
              Sign Up With Google
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;