import swirl from "../../assets/Swirl.svg";
import { useState } from "react";
import instance from '../../axios.js'
import Features from "../Features/Features";
import Pricing from "../Pricing/Pricing";
import { Navbar, WelcomePage } from "../index";
import { TanStackTable } from '../index';
import Input from './Input.tsx'
const Home = () => {

  const auth = true;
  if (auth) {
    return (
      <>
        <Navbar />
        <div className="pt-4 min-h-screen bg-elite-black">
          <Input />
          <TanStackTable />
        </div>
      </>
    );
  } else {
    return (
      <>
        <WelcomePage />
      </>
    );
  }
};

export default Home;
