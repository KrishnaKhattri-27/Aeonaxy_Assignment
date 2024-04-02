import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Hero from '../components/HomePage/Hero'
import Solutions from '../components/HomePage/Solutions'
import Booking from '../components/Booking/Booking'
import Footer from '../components/Footer/Footer'

const Home = () => {
  return (
    <div>
      {/* <Navbar/> */}
      <Hero />
      <Solutions/>
      <Booking/>
      {/* <Footer/> */}
    </div>
  )
}

export default Home
