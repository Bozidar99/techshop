import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

//ROUTER
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
//PAGES
import HomePage from './pages/HomePage.jsx'

const router = createBrowserRouter([
  //APP ROUTER

  {
    path : '/',
    element : <App />,
    children: [
      {
        path : '/',
        element : <HomePage />,
      }
    ]
  }

])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} / >
  </StrictMode>,
)
