import { jsx as _jsx } from "react/jsx-runtime";
{ /* @ts-ignore*/ }
import React from 'react';
{ /* @ts-ignore*/ }
import ReactDOM from 'react-dom/client';
import App from './components/App';
import './index.css';
import reducer, { initialState } from './MyContexts/reducer';
import { StateProvider } from './MyContexts/StateProvider';
ReactDOM.createRoot(document.getElementById('root')).render(_jsx(React.StrictMode, { children: _jsx(StateProvider, { initialState: initialState, reducer: reducer, children: _jsx(App, {}) }) }));
