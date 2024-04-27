import React from 'react'
import Hero from './Hero'
import Feature from './Feature'
import About from './About'
import Destinations from './Destinations'
import Hotels from './Hotels'
import Contact from './Contact'
import Footer from './Footer'

const Home = () => {
  return (
    <div>
      <Hero/>
      <About/>
      <Feature/>
      <Destinations/>
      <Hotels/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default Home
