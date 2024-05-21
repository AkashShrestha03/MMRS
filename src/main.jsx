import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {RouterProvider, createBrowserRouter} from "react-router-dom"
import Home from './pages/Home'
import Contact from './pages/Contact'
import HomePage from './pages/HomePage'
import About from './pages/About'


const router = createBrowserRouter([{
  path: "/",
  element: <App/>,
  children : [
    {path: "/", element: <Home/>},
    {path: "/contact", element: <Contact/>},
    {path: "/about", element: <About/>},

  ],
}]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </React.StrictMode>
);
