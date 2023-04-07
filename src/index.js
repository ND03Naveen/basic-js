import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Route path="/ads.txt" render={() => (
        <iframe
          title="ads.txt file"
          src="/ads.txt"
          style={{ width: '100%', height: '100vh', border: 'none' }}
        />
      )} />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();

