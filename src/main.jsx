import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'

import {app} from './hooks/config.js'
import { FilterProvider } from './context/FilterContext.jsx'
import { CartProvider } from './context/CartContext.jsx'
import { AuthProvider } from './context/AuthContext.jsx'
console.log(app);

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <FilterProvider>
            <CartProvider>
                <AuthProvider>
                    <BrowserRouter>
                        <App />
                    </BrowserRouter>
                </AuthProvider>
            </CartProvider>
        </FilterProvider>
    </StrictMode>,
)
