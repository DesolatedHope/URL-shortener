{ /* @ts-ignore*/ }
import React from 'react';
{ /* @ts-ignore*/ }
import ReactDOM from 'react-dom/client';
import App from './components/App.js';
import './index.css';
import reducer, { initialState } from './MyContexts/reducer';
import { StateProvider } from './MyContexts/StateProvider';
ReactDOM.createRoot(document.getElementById('root')).render(React.createElement(React.StrictMode, null,
    React.createElement(StateProvider, { initialState: initialState, reducer: reducer },
        React.createElement(App, null))));
