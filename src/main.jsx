import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import LoginPage from './pages/client/auth/Auth.jsx'
import RegistrPage from './pages/client/auth/Registr.jsx'
import {Routes, Route, BrowserRouter, Link} from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <LoginPage /> */}
    <RegistrPage />
  </StrictMode>
)
