import React from 'react'
// import Navbar from '../Components/Navbar/Navbar'
import Hero from'../Components/Hero/Hero'
import Footer from '../Components/footer/Footer'
import DownloadCvButton from '../Components/DownloadCv/DownloadCv'

const Home = () => {
  return (
    <div>
      {/* <Navbar/> */}
      <Hero/>
      <DownloadCvButton/>

      <Footer/>
    </div>
  )
}

export default Home
