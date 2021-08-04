import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/global.css';
import NavBar from '../components/Navbar/NavBar';
import Hero from '../components/Hero/Hero';
import About from '../components/About/About';
import Milestone from "../components/Milestone/Milestone";
import Team from "../components/Team/Team";
import Footer from "../components/Footer/Footer";
import Photos from "../components/Photos/Photos";
import Head from "../components/Head/Head";
export default function Home() {
  return (
    <div>
      <Head/>
      <NavBar/>
      <Hero />
      <About />
      <Milestone />
      <Team />
      <Photos />
     <Footer />
    </div>
  )
}
