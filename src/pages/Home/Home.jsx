import React from 'react'
import Hero from '../../components/Hero/Hero'
import HomePageServices from '../../components/HomePageServices/HomePageServices'
import HomePageGallery from '../../components/HomePageGallery/HomePageGallery'
import Trusty from '../../components/Trusty/Trusty'

const Home = () => {
  return (
    <div>
      <Hero/>
      <HomePageServices/>
     <HomePageGallery/>
     <Trusty/>
    </div>
  )
}

export default Home
