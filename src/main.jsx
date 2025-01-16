import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

//ROUTER
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
//PAGES
import HomePage from './pages/HomePage.jsx'
//REDUX & STORE
import { Provider } from 'react-redux'
import store from './store/store.js'


//Import Clerk publishable key
import { ClerkProvider } from '@clerk/clerk-react'
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}

const router = createBrowserRouter([
  //APP ROUTER

  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      }
    ]
  }

])

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <Provider store={store}>
      <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
        <RouterProvider router={router} />
      </ClerkProvider>
    </Provider>

  </StrictMode>,
)
