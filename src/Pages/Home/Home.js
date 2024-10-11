import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Slider from '../../Components/Slider/Slider'
import Reviews from '../../Components/Reviews/Reviews'
import Services from '../../Components/Services/Services'

const Home = () => {
  return (
    <div>
    <Navbar/>
    <Slider/>
    <Reviews/>
    <Services/>      
    </div>
  )
}

export default Home
