import React, { useState } from "react"
import "./style.css"
import stair from "../../assets/images/stair.png"
import chara from "../../assets/images/chara.png"
import sand from "../../assets/images/sandClock.png"
import ScrollTrigger from "react-scroll-trigger"

import { Container, Image } from "react-bootstrap"

const Milestone2 = () => {
  const [visible, setVisible] = useState(false)
  const [stopTimelineScroll, setScroll] = useState(false)

  const onEnterViewport = () => {
    setVisible(true)
  }
  const onExitViewport = () => {
    setVisible(false)
  }

  const handleScroll = () => {
    const sections = document.querySelectorAll(".mile-section")
    const timeline = document.querySelector(".mile-timeline")
    const line = document.querySelector(".mile-line")
    line.style.bottom = `calc(100% - 20px)`

    let prevScrollY = window.scrollY
    let set = 0
    const targetY = window.innerHeight * 0.8

    let goingup = window.scrollY < prevScrollY
    let goingdown = !goingup

    const timelineRect = timeline.getBoundingClientRect()

    const dist = targetY - timelineRect.top

    if (goingdown && !stopTimelineScroll) {
      set = Math.max(set, dist)
      line.style.bottom = `calc(100% - ${set}px)`
    }

    if (dist > timeline.offsetHeight + 50 && !stopTimelineScroll) {
      console.log("here now")
      setScroll(true)
      line.style.bottom = `-50px`
      window.removeEventListener("scroll", handleScroll)
    }

    sections.forEach(item => {
      const rect = item.getBoundingClientRect()

      if (rect.top + item.offsetHeight / 5 < targetY) {
        item.classList.add("show-me")
      }
    })

    prevScrollY = window.scrollY
  }

  const addScrollListener = () => {
    if (!stopTimelineScroll) window.addEventListener("scroll", handleScroll)
  }

  return (
    <div className="milestone">
      <ScrollTrigger
        className="mx-auto"
        onEnter={onEnterViewport}
        onExit={onExitViewport}
      >
        <Container className="text-center" id="milestone-image">
          <Image
            fluid
            src={stair}
            alt="stair"
            id={`stair${visible ? "-animate" : ""}`}
          />
          <Image
            fluid
            src={chara}
            alt="chara"
            id={`chara${visible ? "-animate" : ""}`}
          />
          <Image
            fluid
            src={sand}
            alt="sand"
            id={`sand${visible ? "-animate" : ""}`}
          />
          <h1 className="display-2" id="milestone-head">
            MILESTONES
          </h1>
        </Container>
      </ScrollTrigger>
      <ScrollTrigger className="mx-auto" onEnter={addScrollListener}>
        <div className="mile-container">
          <div className="mile-timeline">
            <div className="mile-line"></div>
            <div className="mile-section">
              <div className="bead"></div>
              <div className="content">
                <h4>Qualified URC 2020 PDR</h4>
                <p>
                  Made it to the top 96 teams globally in our first attempt for
                  the University Rover Challenge organized by the ' Mars
                  Society, United States of America '.
                </p>
              </div>
            </div>
            <div className="mile-section">
              <div className="bead"></div>
              <div className="content">
                <h4>3rd in India for ERC 2020</h4>
                <p>
                  With a World Rank of 32, we secured 3rd place in india and 1st
                  in kerala! and made our way to several
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://english.mathrubhumi.com/education/articles/cusat-team-enters-round-2-of-university-rover-challenge-1.5365311"
                  >
                    newspaper headlies
                  </a>
                </p>
              </div>
            </div>
            <div className="mile-section">
              <div className="bead"></div>
              <div className="content">
                <h4>Subteams outperform all other teams in the world</h4>
                <p>
                  The Science and CAD subteam of team Horizon secured highest
                  points in the world for SAR of URC 2021
                </p>
              </div>
            </div>
            <div className="mile-section">
              <div className="bead"></div>
              <div className="content">
                <h4>Conducted Workshops</h4>
                <p>
                  We have conducted various workshops teaching industry-level
                  skills(AutoCAD, Solidworks, Blender, Arduino, PCB Design,
                  etc....) where over 150 students from over 15 campuses all
                  over the country participated.
                </p>
              </div>
            </div>
          </div>
        </div>
      </ScrollTrigger>
    </div>
  )
}

export default Milestone2
