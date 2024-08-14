import React from 'react'
import Header from './header/header'
// import Home from './Home/Home'
import Footer from './footer/Footer'
import { Outlet } from 'react-router-dom'
const Layout = () => {
  return (
  <>
<Header/>
< Outlet/>
<Footer/>
  </>
  )
}

export default Layout
