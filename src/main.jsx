import React from 'react';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import './index.css'
import App from './App.jsx'
import {CartProvider } from './context/CartContext.jsx'
import { ProductosProvider } from './context/ProductosContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ProductosProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </ProductosProvider>
  </StrictMode>,
)
