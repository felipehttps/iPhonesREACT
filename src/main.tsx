import { createRoot } from 'react-dom/client'
import './index.css'
import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Cadastro } from './components/cadastro.tsx'
import { Login } from './components/login.tsx'


const router = createBrowserRouter([
  {
    path: '/cadastro',
    element: <Cadastro />,
  },
  {
    path: '/',
    element: <Login/>
  }
]);

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
