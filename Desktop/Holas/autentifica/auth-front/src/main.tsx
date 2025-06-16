import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './routes/Login.tsx'
import Singup from './routes/singup.tsx'
import Dasboard from './routes/dasboard.tsx'
import ProtectedRoute from './routes/protecteRoute.tsx'
import { AuthProvider } from './Auth/AuthProvider.tsx'
import React from 'react'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
  },
  {
    path: '/Singup',
    element: <Singup />,
  },
    {
    path: '/',
    element: <ProtectedRoute />,
    children: [
      {
        path: '/dasboard',
        element: <Dasboard />,  
      }
    ]
      
  },
])

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}/>
      </AuthProvider>
   </React.StrictMode>,
)
