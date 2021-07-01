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
                        <h1 className="display-3" id="about-head">About</h1>
                        <p className="lead" id="about-content">Team Horizon represents CUSAT in URC. Cochin University of Science and Technology (CUSAT) 
                        occupies a unique place on the academic road map of Asia as a premier institution for higher 
                        education. The University’s motto ‘Tejasswinavadhitamasthu’ meaning ‘may thewisdom accrued 
                        deify us both - the teacher and the taught and percolateto the universe in its totality. 
                        The pursuit of excellence through these programmes has given CUSAT national and international 
                        acclaim</p>
                    </Col>
                </Row>
            </Container>
        </Container>
        
    )
}
