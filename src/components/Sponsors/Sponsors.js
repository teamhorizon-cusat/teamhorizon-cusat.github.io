import React from "react"
import "./style.css"
import { Container, Row, Col, Image } from "react-bootstrap"
import teqip from "../../assets/images/teqip-logo.png"
import ScrollTrigger from "react-scroll-trigger"

const Sponsors = () => {
  const [t1, setT1] = React.useState(false)

  const onEnterViewport1 = () => {
    setT1(true)
  }
  const onExitViewport1 = () => {
    setT1(false)
  }

  return (
    <Container fluid id="sponsors">
      <Container className="mt-5">
        <ScrollTrigger onEnter={onEnterViewport1} onExit={onExitViewport1}>
          <h1 id={`${t1 ? "animsponsors" : ""}`}>
            Gratitude
            <span role="img" aria-label="heart emoji">
              💝
            </span>
          </h1>
        </ScrollTrigger>
      </Container>
      <Row id="teqip">
        <Image src={teqip} alt="teqip logo" id="teqip-logo" />
      </Row>
      <h3>Founding Sponsors:</h3>
      <Row id="sponsor-names">
        <Col md={6}>
          <h4>Anith Lastname</h4>
          <h5>(Network Manager, SomeCompany)</h5>
        </Col>
        <Col md={6}>
          <h4>JayaSuryan Lastname</h4>
          <h5>(Product Manager, SomeCompany)</h5>
        </Col>
      </Row>
    </Container>
  )
}

export default Sponsors
