import React from 'react';
import ReactDOM from 'react-dom/client';
//import './index.css';
// import { Provider } from 'redux-redux';
import App from './App';
import AppState from './context/App/AppState';
//import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<AppState> 
    <App />

    </AppState>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
