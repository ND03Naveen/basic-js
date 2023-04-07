import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
const currentLocation = window.location;
root.render(
  <React.StrictMode>
    <BrowserRouter>        
         {currentLocation.pathname==='/ads.txt'? <pre>{"google.com, pub-9343290922292627, DIRECT, f08c47fec0942fa0"}</pre>:
        <App/>}
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
