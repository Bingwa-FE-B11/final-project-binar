import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/css/index.css';
import { RouteList } from './routes/RouteList';
import { Toaster } from 'react-hot-toast';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Toaster />
    <RouteList />
  </React.StrictMode>
);
