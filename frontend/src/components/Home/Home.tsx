import swirl from "../../assets/Swirl.svg";
import { useState } from "react";
import instance from '../../axios.js'

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

  return (
    <>
      {/* <img src={swirl} className="z-50 absolute top-0 left-0 h-full w-full" /> */}
      {/* <img src={cubes} className="-z-20 absolute top-0 left-0" /> */}

      <div className="justify-self-center text-center justify-center center content-center w-full pt-[100px] flex flex-col">
        <div className="justify-self-center text-center justify-center center content-center">
          <p className="text-[50px] text-transparent pt-[80px] bg-gradient-to-r from-bright-pink to-bright-blue bg-clip-text font-bold justify-center z-50 center">
            Shorten Your Loooong Links :)
          </p>
        <p className="text-[15px] text-lite-gray pt-[4px] justify-center z-50 center pb-[30px]">
          An efficient and easy-to-use URL Shortening service that streamlines
          your online experience.
        </p>
        </div>
        
        <div className="justify-center flex flex-row content-center">
        <input
          className="shadow border-[4px] border-gray-700 rounded-full py-4 w-[600px] py-2 px-3 text-lite-gray bg-dark-gray flex focus:shadow-outline"
          id="username"
          type="text"
          placeholder="Enter the link here"
          value={longURL}
          onChange={(e) => setLongURL(e.target.value)}
        >
        </input>

        <button
          className="bg-bright-blue h-[50px] mt-[6.5px] w-[150px] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full -ml-[157px] cursor-pointer"
          onClick={()=> handleSubmit()}
        >
          Shorten Now!
        </button>
        </div>
        {shortURL && <p style={{color:"white"}}>{shortURL}</p>}
      </div>
    </>
  );
};

export default Home;
