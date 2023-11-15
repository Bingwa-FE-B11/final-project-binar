import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/css/index.css';
import { RouteList } from './routes/RouteList';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouteList />
  </React.StrictMode>
);
