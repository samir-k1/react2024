 import React from 'react'
// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import {  RouterProvider , createBrowserRouter } from 'react-router-dom'
import Layout from './component/Layout'
import Home from './component/Home/Home'
import About from './component/About/About'
import Contact from './component/Contact/Contact'
import UserId from './component/User/User'
import Github from './component/Github/Github'
const router=createBrowserRouter([
  {
    path:'/',
    element:<Layout/>,
  children:[
    {
      path:"",
      element:<Home/>
    },
    {
      path:"About",
      element:<About/>
    },
    {
      path:"Contact",
      element:<Contact/>
    },
    {
      path:"user/:userid",
      element:<UserId/>
    },
    {
      path:"Github",
      element:<Github/>
    },

   
  ]
  }

])
     





createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router ={router}/>
  </React.StrictMode>,
)