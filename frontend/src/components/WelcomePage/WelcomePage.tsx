import React from "react";
import { Input } from "../index";

const WelcomePage = () => {
  return (
    <div className="justify-self-center text-center justify-center center content-center w-full pt-[100px]">
      <div className="justify-self-center text-center justify-center center content-center">
        <p className="text-[50px] text-transparent pt-[80px] bg-gradient-to-r from-bright-pink to-bright-blue bg-clip-text font-bold justify-center z-50 center">
          Shorten Your Loooong Links :)
        </p>
      </div>
      <p className="text-[15px] text-lite-gray pt-[4px] justify-center z-50 center pb-[30px]">
        An efficient and easy-to-use URL Shortening service that streamlines
        your online experience.
      </p>

      <Input />
    </div>
  );
};

export default WelcomePage;
