import swirl from "../../assets/Swirl.svg";
import { useState } from "react";
import instance from '../../axios.js'
import Features from "../Features/Features";
import Pricing from "../Pricing/Pricing";
import { Navbar, WelcomePage } from "../index";
import { TanStackTable } from '../index';
const Home = () => {

  const [longURL,setLongURL] = useState("");
  const [shortURL,setShortURL] = useState("");

  const handleSubmit = () => {
    console.log("hello")
    console.log(longURL);
    const getShortURL = async () => {
      const response = await instance.post('/api/getShortURL', {
        longURL: longURL
      },
      {
        headers:{
          'Content-Type': 'application/json'
        }
      }
      )
      setShortURL(response.data.shortURL);
    }
    getShortURL();
  }

  const auth = true;
  if (auth) {
    return (
      <>
        <Navbar />
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
