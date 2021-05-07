import React from 'react'
import Navbar from '../components/Navbar'
import About from '../components/About'
import Footer from '../components/Footer'
import Timeline from '../components/Timeline'
import '../styles/global.css'

export default function Index() {
  return (
    <div>
      <Navbar />
      <About />
      <Timeline />
      <Footer />
    </div>
  )
}
