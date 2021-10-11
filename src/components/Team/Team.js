import React, { useState } from "react"
import sheena from "../../assets/images/team/Frame12.png"
import saransh from "../../assets/images/team/Frame13.png"
import aftab from "../../assets/images/team/Frame8.png"
import nayan from "../../assets/images/team/Frame7.png"
import rafi from "../../assets/images/team/Frame11.png"
import uttkrisht from "../../assets/images/team/Frame15.png"
import Aruna from "../../assets/images/team/Frame16.png"
import Aishwarya from "../../assets/images/team/Frame9.png"
import Lafin from "../../assets/images/team/Frame14.png"
import Romal from "../../assets/images/team/Frame10.png"

import team from "../../assets/images/teamWork.png"
import "./style.css"
import { Container, Row, Col, Image } from "react-bootstrap"
// import { Envelope, Linkedin } from "react-bootstrap-icons"
import ScrollTrigger from "react-scroll-trigger"

export default function Team() {
  const [t1, setT1] = useState(false)
  const [t2, setT2] = useState(false)
  const [t3, setT3] = useState(false)
  const [t4, setT4] = useState(false)
  const [t5, setT5] = useState(false)
  const [t6, setT6] = useState(false)
  const [t7, setT7] = useState(false)
  const [t8, setT8] = useState(false)

  const onEnterViewport1 = () => {
    setT1(true)
  }
  const onExitViewport1 = () => {
    setT1(false)
  }
  const onEnterViewport2 = () => {
    setT2(true)
  }
  const onExitViewport2 = () => {
    setT2(false)
  }
  const onEnterViewport3 = () => {
    setT3(true)
  }
  const onExitViewport3 = () => {
    setT3(false)
  }
  const onEnterViewport4 = () => {
    setT4(true)
  }
  const onExitViewport4 = () => {
    setT4(false)
  }
  const onEnterViewport5 = () => {
    setT5(true)
  }
  const onExitViewport5 = () => {
    setT5(false)
  }
  const onEnterViewport6 = () => {
    setT6(true)
  }
  const onExitViewport6 = () => {
    setT6(false)
  }
  const onEnterViewport7 = () => {
    setT7(true)
  }
  const onExitViewport7 = () => {
    setT7(false)
  }
  const onEnterViewport8 = () => {
    setT8(true)
  }
  const onExitViewport8 = () => {
    setT8(false)
  }

  return (
    <Container id="team">
      <Container className="text-center">
        <Row>
          <Col md={6}>
            <ScrollTrigger onEnter={onEnterViewport1} onExit={onExitViewport1}>
              <h1
                className="display-2"
                id={`team-main-head${t1 ? "-animate" : ""}`}
              >
                TEAM
              </h1>
              <p className="lead" id={`${t1 ? "team-p-animate" : ""}`}>
                (main guys only)
              </p>
            </ScrollTrigger>
          </Col>
          <Col md={6}>
            <ScrollTrigger
              id="team-img-work"
              onEnter={onEnterViewport1}
              onExit={onExitViewport1}
            >
              <Image
                fluid
                src={team}
                alt="teamwork pic"
                id={`team-base-img${t1 ? "-animate" : ""}`}
              />
            </ScrollTrigger>
          </Col>
        </Row>
      </Container>
      <Container id="team-card">
        <div class="team-row">
          <ScrollTrigger
            onEnter={onEnterViewport1}
            onExit={onExitViewport1}
            aria-label="animation for team"
          >
            <div id={`image-container1${t1 ? "-animate" : ""}`}>
              <Image
                src={sheena}
                alt="the freaking awesome team members"
                id="team-img"
              />
              <h4>Sheena K M</h4>
              <p>Faculty Advisor | Associate Professor</p>
              {/* <p>
                <a
                  href="mailto:sheenameerankunju@gmail.com"
                  aria-label="button for emailing team member"
                >
                  <Envelope />
                </a>
              </p> */}
            </div>
          </ScrollTrigger>
          <ScrollTrigger
            onEnter={onEnterViewport1}
            onExit={onExitViewport1}
            aria-label="animation for team"
          >
            <div id={`image-container2${t1 ? "-animate" : ""}`}>
              <Image
                src={saransh}
                alt="the freaking awesome team members"
                id="team-img"
              />
              <h4>Saransh Jha</h4>
              <p>Team Lead</p>
              {/* <p>
                <a
                  href="mailto:19it073sara@ug.cusat.ac.in"
                  aria-label="button for emailing team member"
                >
                  <Envelope />
                </a>
                <a
                  href="https://www.linkedin.com/in/saransh-jha-144b9318bv"
                  aria-label="linked in link"
                >
                  <Linkedin />
                </a>
              </p> */}
            </div>
          </ScrollTrigger>
        </div>
        <div class="team-row">
          <ScrollTrigger
            onEnter={onEnterViewport2}
            onExit={onExitViewport2}
            aria-label="animation for team"
          >
            <div id={`image-container3${t2 ? "-animate" : ""}`}>
              <Image
                src={aftab}
                alt="the freaking awesome team members"
                id="team-img"
              />
              <h4>Aftab Mehrab</h4>
              <p>Team manager</p>
              {/* <p>
                <a
                  href="mailto:aftab.s@ug.cusat.ac.in"
                  aria-label="button for emailing team member"
                >
                  <Envelope />
                </a>
                <a
                  href="https://www.linkedin.com/in/aftab-s-9b69571a3"
                  aria-label="linked in link"
                >
                  <Linkedin />
                </a>
              </p> */}
            </div>
          </ScrollTrigger>
          <ScrollTrigger
            onEnter={onEnterViewport3}
            onExit={onExitViewport3}
            aria-label="animation for team"
          >
            <div id={`image-container4${t3 ? "-animate" : ""}`}>
              <Image
                src={nayan}
                alt="the freaking awesome team members"
                id="team-img"
              />
              <h4>Nayan Jomi</h4>
              <p>Mechanical Lead</p>
              {/* <p>
                <a
                  href="mailto:18me1061naya@ug.cust.ac.in"
                  aria-label="button for emailing team member"
                >
                  <Envelope />
                </a>
                <a
                  href="https://www.linkedin.com/in/nayan-jomi-6879551b2"
                  aria-label="linked in link"
                >
                  <Linkedin />
                </a>
              </p> */}
            </div>
          </ScrollTrigger>
        </div>
        <div class="team-row">
          <ScrollTrigger
            onEnter={onEnterViewport4}
            onExit={onExitViewport4}
            aria-label="animation for team"
          >
            <div id={`image-container5${t4 ? "-animate" : ""}`}>
              <Image
                src={rafi}
                alt="the freaking awesome team members"
                id="team-img"
              />
              <h4>Rafi Rasheed</h4>
              <p>Electronics Lead</p>
              {/* <p>
                <a
                  href="mailto:vasantjoseph333@gmail.com"
                  aria-label="button for emailing team member"
                >
                  <Envelope />
                </a>
                <a
                  href="https://www.linkedin.com/in/vasantjoseph/"
                  aria-label="linked in link"
                >
                  <Linkedin />
                </a>
              </p> */}
            </div>
          </ScrollTrigger>
          <ScrollTrigger
            onEnter={onEnterViewport5}
            onExit={onExitViewport5}
            aria-label="animation for team"
          >
            <div id={`image-container6${t5 ? "-animate" : ""}`}>
              <Image
                src={uttkrisht}
                alt="the freaking awesome team members"
                id="team-img"
              />
              <h4>Utkrisht Pathak</h4>
              <p>Software Lead</p>
              {/* <p>
                <a
                  href="mailto:19cs095utkr@ug.cusat.ac.in"
                  aria-label="button for emailing team member"
                >
                  <Envelope />
                </a>
                <a
                  href="https://www.linkedin.com/in/utkrisht-pathak-a9111a1b0"
                  aria-label="linked in link"
                >
                  <Linkedin />
                </a>
              </p> */}
            </div>
          </ScrollTrigger>
        </div>
        <div class="team-row">
          <ScrollTrigger
            onEnter={onEnterViewport6}
            onExit={onExitViewport6}
            aria-label="animation for team"
          >
            <div id={`image-container7${t6 ? "-animate" : ""}`}>
              <Image
                src={Aruna}
                alt="the freaking awesome team members"
                id="team-img"
              />
              <h4>Aruna P V</h4>
              <p>Science Lead</p>
              {/* <p>
                <a
                  href="mailto:rafirasheed@ug.cusat.ac.in"
                  aria-label="button for emailing team member"
                >
                  <Envelope />
                </a>
                <a
                  href="https://www.linkedin.com/in/rafitc"
                  aria-label="linked in link"
                >
                  <Linkedin />
                </a>
              </p> */}
            </div>
          </ScrollTrigger>
          <ScrollTrigger
            onEnter={onEnterViewport7}
            onExit={onExitViewport7}
            aria-label="animation for team"
          >
            <div id={`image-container8${t7 ? "-animate" : ""}`}>
              <Image
                src={Aishwarya}
                alt="the freaking awesome team members"
                id="team-img"
              />
              <h4>Aishwarya T P</h4>
              <p>Media Lead</p>
              {/* <p>
                <a
                  href="mailto:18ee012aman@ug.cusat.ac.in"
                  aria-label="button for emailing team member"
                >
                  <Envelope />
                </a>
                <a
                  href="https://www.linkedin.com/in/aman-deep-494236185"
                  aria-label="linked in link"
                >
                  <Linkedin />
                </a>
              </p> */}
            </div>
          </ScrollTrigger>
        </div>
        <div class="team-row">
          <ScrollTrigger
            onEnter={onEnterViewport8}
            onExit={onExitViewport8}
            aria-label="animation for team"
          >
            <div id={`image-container9${t8 ? "-animate" : ""}`}>
              <Image
                src={Lafin}
                alt="the freaking awesome team members"
                id="team-img"
              />
              <h4>Lafin Shan</h4>
              <p>Outreach Head</p>
              {/* <p>
                <a
                  href="mailto:19cs091sumi@ug.cusat.ac.in"
                  aria-label="button for emailing team member"
                >
                  <Envelope />
                </a>
                <a
                  href="https://www.linkedin.com/in/sumit-kumar-singh-aba334192/"
                  aria-label="linked in link"
                >
                  <Linkedin />
                </a>
              </p> */}
            </div>
          </ScrollTrigger>
          <ScrollTrigger
            onEnter={onEnterViewport8}
            onExit={onExitViewport8}
            aria-label="animation for team"
          >
            <div id={`image-container9${t8 ? "-animate" : ""}`}>
              <Image
                src={Romal}
                alt="the freaking awesome team members"
                id="team-img"
              />
              <h4>Romal Josbin</h4>
              <p>Sponsorship Head</p>
              {/* <p>
                <a
                  href="mailto:19cs091sumi@ug.cusat.ac.in"
                  aria-label="button for emailing team member"
                >
                  <Envelope />
                </a>
                <a
                  href="https://www.linkedin.com/in/sumit-kumar-singh-aba334192/"
                  aria-label="linked in link"
                >
                  <Linkedin />
                </a>
              </p> */}
            </div>
          </ScrollTrigger>
        </div>
      </Container>
    </Container>
  )
}
