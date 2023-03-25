import React from 'react'
import AboutUs from '../About'
import CustomerReview from '../CustomerReview'
import Footer from '../Footer'
import HeroSection from '../HeroSection'
import HighLight from '../HighLight'
import Navbar from '../Navbar'

export default function Home() {
  return (
    <div>
       <Navbar/>
       <HeroSection/>
       <HighLight/>
       <AboutUs/>
       <CustomerReview/>
       <Footer/>
    </div>
  )
}
