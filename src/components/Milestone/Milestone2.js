import React, { useState } from "react"
import "./style.css"
import stair from "../../assets/images/stair.png"
import chara from "../../assets/images/chara.png"
import sand from "../../assets/images/sandClock.png"
import ScrollTrigger from "react-scroll-trigger"

import { Container, Image } from "react-bootstrap"

const Milestone2 = () => {
  const [visible, setVisible] = useState(false)
  const [visiblemile1, setVisiblemile1] = useState(false)
  const [visiblemile2, setVisiblemile2] = useState(false)
  const [visiblemile3, setVisiblemile3] = useState(false)
  const [visiblemile4, setVisiblemile4] = useState(false)
  const [visiblemile5, setVisiblemile5] = useState(false)
  const [visiblemile6, setVisiblemile6] = useState(false)

  const onEnterViewport = () => {
    setVisible(true)
  }
  const onExitViewport = () => {
    setVisible(false)
  }

  const onEnterViewport1 = () => {
    setVisiblemile1(true)
  }
  const onEnterViewport2 = () => {
    setVisiblemile2(true)
  }
  const onEnterViewport3 = () => {
    setVisiblemile3(true)
  }
  const onEnterViewport4 = () => {
    setVisiblemile4(true)
  }
  const onEnterViewport5 = () => {
    setVisiblemile5(true)
  }
  const onEnterViewport6 = () => {
    setVisiblemile6(true)
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
      <ScrollTrigger className="mx-auto">
        <div className="mile-container">
          <div className="mile-timeline">
            <div className="mile-line"></div>
            <ScrollTrigger onEnter={onEnterViewport2} className="mile-scroll">
              <div className={`mile-section${visiblemile2 ? "-animate" : ""}`}>
                <div className="bead"></div>
                <div className="content">
                  <h4>Qualified URC 2020 PDR</h4>
                  <p>
                    Made it to the top 96 teams globally in our first attempt
                    for the University Rover Challenge organized by the ' Mars
                    Society, United States of America '.
                  </p>
                </div>
              </div>
            </ScrollTrigger>
            <ScrollTrigger onEnter={onEnterViewport3} className="mile-scroll">
              <div className={`mile-section${visiblemile3 ? "-animate" : ""}`}>
                <div className="bead"></div>
                <div className="content">
                  <h4>3rd in India for ERC 2020</h4>
                  <p>
                    With a World Rank of 32, we secured 3rd place in india and
                    1st in kerala! and made our way to several
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
            </ScrollTrigger>
            <ScrollTrigger onEnter={onEnterViewport1} className="mile-scroll">
              <div className={`mile-section${visiblemile1 ? "-animate" : ""}`}>
                <div className="bead"></div>
                <div className="content">
                  <h4>ERC 2021 </h4>
                  <p>
                    We have secured 39th rank in the European Rover Challenge
                    2021.
                  </p>
                </div>
              </div>
            </ScrollTrigger>
            <ScrollTrigger onEnter={onEnterViewport4} className="mile-scroll">
              <div className={`mile-section${visiblemile4 ? "-animate" : ""}`}>
                <div className="bead"></div>
                <div className="content">
                  <h4>Subteams outperform all other teams in the world</h4>
                  <p>
                    The Science and CAD subteam of team Horizon secured highest
                    points in the world for SAR of URC 2021
                  </p>
                </div>
              </div>
            </ScrollTrigger>
            <ScrollTrigger onEnter={onEnterViewport5} className="mile-scroll">
              <div className={`mile-section${visiblemile5 ? "-animate" : ""}`}>
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
            </ScrollTrigger>
            <ScrollTrigger onEnter={onEnterViewport6} className="mile-scroll">
              <div className={`mile-section${visiblemile6 ? "-animate" : ""}`}>
                <div className="bead"></div>
                <div className="content">
                  <h4>Qualified URC 2022 PDR</h4>
                  <p>
                    Successfully qualified the Preliminary Design Review of
                    University Rover Challenge. The team has cleared PDR for
                    three consecutive years ( 2020, 2021, 2022).
                  </p>
                </div>
              </div>
            </ScrollTrigger>
          </div>
        </div>
      </ScrollTrigger>
    </div>
  )
}

export default Milestone2
