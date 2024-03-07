import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// import { Home } from './components/Home/Home'
{ /* @ts-ignore*/ }
import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from ".";
import SignUp from './SignUp/SignUp';
import Login from "./LogIn/LogIn";
// import cubes from "./assets/Cubes.svg";
// import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import { useStateValue } from "../MyContexts/StateProvider.jsx";
import PageNotFound from './PageNotFound/PageNotFound.js';
import Analytics from './Analytics/Analytics';
function App() {
    const [{ token }, dispatch] = useStateValue();
    useEffect(() => {
        dispatch({
            type: "INITIALIZE_TOKEN",
        });
    }, [token]);
    return (_jsx(BrowserRouter, { children: _jsxs(Routes, { children: [_jsx(Route, { index: true, element: _jsx(Home, {}) }), _jsx(Route, { path: "LogIn", element: _jsx(Login, {}) }), _jsx(Route, { path: "SignUp", element: _jsx(SignUp, {}) }), _jsx(Route, { path: "*", element: _jsx(PageNotFound, {}) }), _jsx(Route, { path: "analytics", element: _jsx(Analytics, {}) })] }) }));
}
export default App;
