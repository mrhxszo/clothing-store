import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { CartContext } from './Context';

ReactDOM.render(
  <React.StrictMode>
    <CartContext>
      <App />
    </CartContext>
    
  </React.StrictMode>,
  document.getElementById('root')
);