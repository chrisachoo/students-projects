import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import { AuthContextProvider } from './context/AuthContext'
import App from './App'
import './index.css'
import { CartProvider } from 'react-use-cart'

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthContextProvider>
    <CartProvider>
      <Router>
        <App />
      </Router>
    </CartProvider>
  </AuthContextProvider>
)
