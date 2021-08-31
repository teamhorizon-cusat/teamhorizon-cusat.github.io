import React from 'react';
import "./style.css";
import { Container,Row,Col,Image } from 'react-bootstrap'
import teqip from '../../assets/images/teqip-logo.png'

const Sponsors = () => {

    return (
    <Container fluid id="sponsors">
        <h1>
            Special Thanks <span role="img" aria-label="heart emoji">💝</span>
        </h1>
        <Row id="teqip">
            <Image  src={teqip} alt="teqip logo" id="teqip-logo"/>
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

export default Sponsors;