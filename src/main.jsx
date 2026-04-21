import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import LoginPage from './pages/client/auth/Auth.jsx'
import RegistrPage from './pages/client/auth/Registr.jsx'
import {Routes, Route, BrowserRouter, Link} from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <React.StrictMode>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/registr' element={<RegistrPage />} />
      </Routes>
  </React.StrictMode>
  </BrowserRouter>
  
)
