import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './pages/App'
import './index.css'
import {RouterProvider, createBrowserRouter} from "react-router-dom"
import Home from './pages/Home'
import Contact from './pages/Contact'
import About from './pages/About'
import Services from './pages/Services'
import Portfolio from './pages/Portfolio'


const router = createBrowserRouter([{
  path: "/",
  element: <App/>,
  children : [
    {path: "/", element: <Home/>},
    {path: "/contact", element: <Contact/>},
    {path: "/about", element: <About/>},
    {path: "/services", element: <Services/>},
    {path: "/portfolio", element: <Portfolio/>},

  ],
}]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </React.StrictMode>
);
