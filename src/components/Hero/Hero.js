import React from 'react';
import heroSpace from '../../assets/images/heroSpace.png';
import metoer from '../../assets/images/metoer.png';
import planet from '../../assets/images/planet.png';
import rocketSpace from '../../assets/images/heroSpace2.png';
import rocket from '../../assets/images/rocket.png';
import smoke from '../../assets/images/smoke.png';
import {Container,Row,Col,Image} from 'react-bootstrap'
import './style.css';

export default function Hero() {
    return (
        <Container>
           <Row id="hero-row">
               <Col md={6}>
                <h1 className="display-1" id="hero-head">Team Horizon</h1>
                <p className="h3 text-center" id="head-subtitle">building next gen rover that, one day roam on mars and beyound </p>
               </Col>
               <Col md={6}>
                   <Container id="hero-section">
                        <Container id="hero-image">
                            <Image fluid src={heroSpace} alt="outer space bro" id="outerSpace" /> 
                            <Image fluid src={metoer} alt="metoer" id="metoer"/>
                            <Image fluid src={planet} alt="saturn" id="planet" />
                        </Container>
                        <Container id="hero-rocket">
                            <Image fluid src={rocketSpace} alt="deep space bro" id="deepSpace"/>
                            <Image fluid src={smoke} alt="smoke(not so harmful)" id="smoke" />
                            <Image fluid src={rocket} alt="rocket(could be falcon)" id="rocket"/>
                        </Container>
                   </Container>
               </Col>
           </Row>
        </Container>
    )
}
