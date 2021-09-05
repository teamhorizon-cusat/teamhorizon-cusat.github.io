import React from 'react';
import logo from '../../assets/images/AboutImage.png'
import './style.css';
import { Container,Row,Col,Image } from 'react-bootstrap'

export default function About() {
    return (
        <Container fluid id="about">
            <Container className="pt-5 pb-5">
                <Row>
                    <Col md={6} className="text-center">
                    <Image fluid src={logo} alt="horizon logo" id="about-logo"/>
                    </Col>
                    <Col md={6}>
                        <h1 className="display-3" id="about-head">ABOUT US</h1>
                        <p className="lead" id="about-content">With the mission of exploring extraterrestrial land, a group of undergraduate students from Cochin University of Science and Technology gave wings to this extraordinary team on 25th September 2019. Within a short period, the team started to be recognized internationally in the field of celestial exploration and space research. Our team holds together six subteams: Science Team, Software Team, Electronics Team, Mechanical Team, Media & Outreach Team, and Sponsorship Team. The awards and laurels we have earned despite being held back on financial grounds are proof of our consistency.
                        </p>
                    </Col>
                </Row>
            </Container>
        </Container>
        
    )
}
