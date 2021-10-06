import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import "./styles/global.css"
import NavBar from "../components/Navbar/NavBar"
import Hero from "../components/Hero/Hero"
import About from "../components/About/About"
import Milestone2 from "../components/Milestone2/Milestone2"
import Team from "../components/Team/Team"
import Footer from "../components/Footer/Footer"
import GalleryHzn from "../components/GalleryHzn/GalleryHzn"
import Head from "../components/Head/Head"

export default function Home() {
  return (
    <div>
      <Head />
      <NavBar />
      <Hero />
      <About />
      <Milestone2 />
      <Team />
      <GalleryHzn />
      <Footer />
    </div>
  )
}
