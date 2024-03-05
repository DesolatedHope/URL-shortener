import swirl from "../../assets/Swirl.svg";
import { useState } from "react";
import instance from '../../axios.js'
import Features from "../Features/Features";
import Pricing from "../Pricing/Pricing";
import { Navbar, WelcomePage } from "../index";
import { TanStackTable } from '../index';
import Input from './Input.tsx'
import { useStateValue} from '../../MyContexts/StateProvider.jsx';

const Home = () => {

  const [{token},dispatch]=useStateValue();
  if (token!=null && token!="null") {
    return (
      <>
        <Navbar />
        <Input />
        {/* <img
          src={swirl}
          className="-z-50 absolute top-0 left-0 h-full w-full"
        /> */}
        {/* <img src={cubes} className="-z-20 absolute top-0 left-0" /> */}
        <div className="pt-4 min-h-screen bg-elite-black">
          <TanStackTable />
        </div>
      </>
    );
  } else {
    return (
      <>
        {/* <Navbar /> */}
        {/* <img
          src={swirl}
          className="-z-50 absolute top-0 left-0 h-full w-full"
        /> */}
        {/* <img src={cubes} className="-z-20 absolute top-0 left-0" /> */}
        <WelcomePage />
      </>
    );
  }
};

export default Home;
