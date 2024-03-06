import React from 'react';
import Navbar from '../Navbar/Navbar';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { useState, useEffect } from 'react';
import { useStateValue } from '../../MyContexts/StateProvider';
import instance from '../../axios';

// const data = [
//   { name: 'Day 1', urls: 100 },
//   { name: 'Day 2', urls: 120 },
//   { name: 'Day 3', urls: 90 },
//   { name: 'Day 4', urls: 150 },
//   { name: 'Day 5', urls: 130 },
//   { name: 'Day 6', urls: 110 },
//   { name: 'Day 7', urls: 140 },
//   { name: 'Day 8', urls: 160 },
//   { name: 'Day 9', urls: 180 },
//   { name: 'Day 10', urls: 170 },
//   { name: 'Day 11', urls: 190 },
//   { name: 'Day 12', urls: 200 },
// ];

const [data,setData]=useState([]);
const [{token},dispatch]=useStateValue();

useEffect(()=>{
  const getData=async()=>{
    try{
      const response=await instance.get('/api/getAnalytics',{
        headers:{
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      })
      setData(response.data.analytics);
    }catch(error){
      console.error("Error fetching analytics data:",error);
    }
  }
  getData();
},[token])

const Analytics = () => {
  return (
    <div className="bg-elite-black text-white min-h-screen">
      <Navbar />

      <div className="container mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold mb-8">Analytics</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-blue-500 text-white rounded-lg p-6">
            <h3 className="text-4xl font-bold mb-2">12,345</h3>
            <p className="text-lg">Total Visits</p>
          </div>
          <div className="bg-green-500 text-white rounded-lg p-6">
            <h3 className="text-4xl font-bold mb-2">6,789</h3>
            <p className="text-lg">Unique Visitors</p>
          </div>
          <div className="bg-yellow-500 text-white rounded-lg p-6">
            <h3 className="text-4xl font-bold mb-2">3,456</h3>
            <p className="text-lg">Bounce Rate</p>
          </div>
          <div className="bg-red-500 text-white rounded-lg p-6">
            <h3 className="text-4xl font-bold mb-2">789</h3>
            <p className="text-lg">Conversions</p>
          </div>
        </div>

        <div className="mt-8">
          <h3 className="text-2xl font-bold mb-4">URL Shortened</h3>
          <div className="flex justify-end mb-4">
            <select className="bg-white border text-black border-gray-300 rounded-md py-2 px-4">
              <option value="days">Days</option>
              <option value="months">Months</option>
            </select>
          </div>
          <LineChart width={800} height={400} data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="urls" stroke="#8884d8" />
          </LineChart>
        </div>
      </div>
    </div>
  );
};

export default Analytics;