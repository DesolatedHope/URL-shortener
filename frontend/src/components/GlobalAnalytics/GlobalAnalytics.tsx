{/* @ts-ignore*/}
import React from "react";
import { useState, useEffect } from "react";
import instance from "../../axios";

const GlobalAnalytics = () => {
  const [data, setData] = useState(null);
  {/* @ts-ignore*/}
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await instance.get("/api/getStats", {
          headers: {
            "Content-Type": "application/json",
          },
        });
        setData(response.data.analytics);
      } catch (error) {
        console.log("error", error);
      }
    };
    getData();
  }, []);

    return (
      <div className="bg-elite-black text-white -mt-[30px]">
  
        <div className="container mx-auto px-4">  
   { data && <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            <div className=" = text-white rounded-lg p-6 h-[250px]">
              {/* @ts-ignore*/}
              <h3 className="text-6xl text-center font-bold mb-2">{data?.users}</h3>
              <p className="text-3xl text-center p-5">Total Users </p>
            </div>
            <div className=" text-white rounded-lg p-6">
              {/* @ts-ignore*/}
              <h3 className="text-6xl text-center font-bold mb-2">{data?.websites}</h3>
              <p className="text-3xl text-center p-5">Total Url Shortened</p>
            </div>
            <div className=" text-white rounded-lg p-6">
              {/* @ts-ignore*/}
              <h3 className="text-6xl text-center font-bold mb-2">{data?.active}</h3>
              <p className="text-3xl text-center p-5">Active Links</p>
            </div>
            <div className=" text-white rounded-lg p-6">
              {/* @ts-ignore*/}
              <h3 className="text-6xl text-center font-bold mb-2">{data?.clicks}</h3>
              <p className="text-3xl text-center p-5">Total Clicks</p>
            </div>
          </div>}
        </div>
      </div>
    );
  
};

export default GlobalAnalytics;
