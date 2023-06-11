import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {  createBrowserRouter,  RouterProvider,HashRouter} from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById('root'));
const currentLocation = window.location;
root.render(
  <React.StrictMode>
    <HashRouter>
    <App/>
    </HashRouter>
  </React.StrictMode>
);

reportWebVitals();
