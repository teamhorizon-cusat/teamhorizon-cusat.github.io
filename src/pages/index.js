import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import About from '../components/About/About'
import Footer from '../components/Footer/Footer'
import Timeline from '../components/Timeline/Timeline'
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
