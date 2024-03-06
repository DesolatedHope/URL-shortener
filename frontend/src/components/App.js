// import { Home } from './components/Home/Home'
{ /* @ts-ignore*/ }
import React from 'react';
import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from ".";
import SignUp from './SignUp/SignUp';
import Login from "./LogIn/LogIn";
// import cubes from "./assets/Cubes.svg";
// import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import { useStateValue } from "../MyContexts/StateProvider.jsx";
import PageNotFound from './PageNotFound/PageNotFound.js';
// import Analytics from './Analytics/Analytics';
function App() {
    const [{ token }, dispatch] = useStateValue();
    useEffect(() => {
        dispatch({
            type: "INITIALIZE_TOKEN",
        });
    }, [token]);
    return (React.createElement(BrowserRouter, null,
        React.createElement(Routes, null,
            React.createElement(Route, { index: true, element: React.createElement(Home, null) }),
            React.createElement(Route, { path: "LogIn", element: React.createElement(Login, null) }),
            React.createElement(Route, { path: "SignUp", element: React.createElement(SignUp, null) }),
            React.createElement(Route, { path: "*", element: React.createElement(PageNotFound, null) }),
            // React.createElement(Route, { path: "analytics", element: React.createElement(Analytics, null) })
            )));
}
export default App;
