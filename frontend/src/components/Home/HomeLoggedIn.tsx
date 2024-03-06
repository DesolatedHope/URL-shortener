import React from 'react'
import Navbar from '../Navbar/Navbar'
import Input from './Input'
import TanStackTable from '../Table/TanStackTable'

function HomeLoggedIn() {
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
  )
}

export default HomeLoggedIn