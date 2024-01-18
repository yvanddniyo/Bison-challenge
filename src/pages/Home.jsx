import React from 'react'
import NavBar from '../components/NavBar'
import HeroContent from '../components/Hero/HeroContent'
import Services from '../components/Services'
import ServiceSection from '../components/ServiceSection'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div className=''>
        <NavBar />
        <HeroContent />
        <Services />
        <ServiceSection />
        <Footer />
    </div>
  )
}

export default Home