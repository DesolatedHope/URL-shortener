// import { Home } from './components/Home/Home'
{/* @ts-ignore*/}
import React from 'react';
import { useEffect } from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import { Home } from ".";
import SignUp from './SignUp/SignUp';
import Login from "./LogIn/LogIn";
// import cubes from "./assets/Cubes.svg";
// import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import { useStateValue } from "../MyContexts/StateProvider.jsx";
import PageNotFound from './PageNotFound/PageNotFound.js';
import Analytics from './Analytics/Analytics';

function App() {

  const [{token}, dispatch] = useStateValue();

  useEffect(()=>{
    dispatch({
      type: "INITIALIZE_TOKEN",
    })
  },[token])

  return (
    <BrowserRouter>
      <Routes >
        <Route index element={<Home />} />
        <Route path="LogIn" element={<Login />} /> 
        <Route path="SignUp" element={<SignUp />} />
        <Route path="analytics" element={<Analytics />} />
        <Route path="*" element={<PageNotFound/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
