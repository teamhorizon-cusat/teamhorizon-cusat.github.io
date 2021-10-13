import React from "react"
import NavBar from "../components/Navbar/NavBar"
import Footer from "../components/Footer/Footer"
import PastTeam from "../components/PastTeam/PastTeam"

const team = () => {
  return (
    <div>
      <NavBar />
      <div className="team-header">Our Team</div>
      <PastTeam />
      <Footer />
    </div>
  )
}

export default team
