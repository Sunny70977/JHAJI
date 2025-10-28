import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { CartProvider } from './Context/CartContext'; 
import { SearchProvider } from './Context/SearchContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <CartProvider>
      <SearchProvider>
        <App />
      </SearchProvider>
    </CartProvider>
  </React.StrictMode>,
);
