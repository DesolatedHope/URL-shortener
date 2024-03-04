// import { Home } from './components/Home/Home'
import { ReactDOM } from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import { Navbar, Home } from ".";
import SignUp from './SignUp/SignUp';
import Login from "./LogIn/LogIn";
// import cubes from "./assets/Cubes.svg";
// import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';

function App() {
  // const kalidas = true;
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
