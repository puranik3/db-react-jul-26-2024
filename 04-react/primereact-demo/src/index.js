import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { PrimeReactProvider } from 'primereact/api';
// import 'primereact/resources/themes/saga-blue/theme.css';
import "primereact/resources/themes/lara-light-cyan/theme.css";
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';

import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

const value = {
  ripple: true
};

root.render(
  <React.StrictMode>
    <PrimeReactProvider value={value}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </PrimeReactProvider>
  </React.StrictMode>
);