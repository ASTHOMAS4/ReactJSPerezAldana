import React from 'react';
import ReactDOM from 'react-dom/client';
import {App} from './components/App.jsx';
import 'bootstrap-icons/font/bootstrap-icons.css'
import { CarritoProvider } from './context/CartContext.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <CarritoProvider>
    <App />
  </CarritoProvider>
);
 

