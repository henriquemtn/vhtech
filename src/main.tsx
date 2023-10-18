import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import RouterManager from './routes/router.tsx'
import NavBar from './components/Navbar/index.tsx'
import { ToastContainer } from 'react-toastify'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <NavBar />
    <ToastContainer />
    <RouterManager />
  </React.StrictMode>,
)
