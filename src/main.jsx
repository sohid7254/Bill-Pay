import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AuthProvider from './Context/AuthProvider'
import { createBrowserRouter, RouterProvider } from 'react-router'
import MainLayouts from './Layout/MainLayouts'
import Home from './Pages/Home'


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts/>,
    children:[
      {
        index: true,
        element: <Home/>
      },
      
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router}/>
    </AuthProvider>
    
  </StrictMode>,
)
