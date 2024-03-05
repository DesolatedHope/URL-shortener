import { Navbar, WelcomePage } from "../index";
import { TanStackTable } from '../index';
import Input from './Input'
import { useStateValue} from '../../MyContexts/StateProvider';
import React from 'react';
const Home = () => {

  const [{token},dispatch]=useStateValue();
  if (token!=null && token!="null" && token!=undefined && token!='undefined') {
    return (
      <>
        <div className="pt-4 min-h-screen bg-elite-black">
          <Navbar />
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
