import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import router from './router'
import { RouterProvider } from 'react-router-dom'
import AuthProvider from './provider/AuthProvider'

createRoot(document.getElementById('root')).render(
  <StrictMode>3
    <AuthProvider>
       <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </StrictMode>,
)
