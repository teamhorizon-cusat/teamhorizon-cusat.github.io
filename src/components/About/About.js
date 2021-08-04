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
                        <p className="lead" id="about-content">Horizon , the infinity connecting the sky and the earth . 
                        And here we are trying to connect a string between CUSAT and space/MARS . 
                        From ranking 96th globally in the "University Rover Challenge" to securing the 3rd position in 
                        india by ERC ranks. Each day with our Eyes stuck to the Horizon we are taking a small step 
                        towards our goal. 
                        </p>
                    </Col>
                </Row>
            </Container>
        </Container>
        
    )
}
