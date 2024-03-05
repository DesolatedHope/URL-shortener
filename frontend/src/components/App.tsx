// import { Home } from './components/Home/Home'
import { useEffect } from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import { Home } from ".";
import SignUp from './SignUp/SignUp';
import Login from "./LogIn/LogIn";
// import cubes from "./assets/Cubes.svg";
// import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import { useStateValue } from "../MyContexts/StateProvider.jsx";

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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
