import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { GlobalAppContextProvider } from './contexts/GlobalAppContext.tsx';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalAppContextProvider>
      <App />
    </GlobalAppContextProvider>
  </React.StrictMode>
);


