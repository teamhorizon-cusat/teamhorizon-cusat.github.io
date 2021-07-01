import React from 'react'
import end from '../../assets/images/end.gif';
import './style.css';
import {Container,Image} from 'react-bootstrap';
import {Facebook,Instagram,Linkedin,Youtube,Envelope} from 'react-bootstrap-icons'
export default function Footer() {
    return (
        <footer id="contactUs">
            <h5 id="footer-head">Team horizon</h5>
            <Container className="text-center">
                <Image fluid src={end} alt="end gif" id="gif"/>
            </Container>
                <p id="link">
                    <a href="https://www.facebook.com/teamhorizoncusat/" target="_blank" rel="noopener noreferrer">
                     <Facebook/>
                    </a>
                    <a href="https://www.instagram.com/teamhorizoncusat/" target="_blank" rel="noopener noreferrer">
                      <Instagram />
                    </a>
                    <a href="https://www.linkedin.com/company/horizon-mars-rover-team/" target="_blank" rel="noopener noreferrer">
                       <Linkedin />
                    </a>
                    <a href="https://www.youtube.com/watch?v=yEy-2Nw_Bh4&feature=youtu.be" target="_blank" rel="noopener noreferrer" >
                       <Youtube />
                    </a>
                    <a href="mailto:roverhrzerc@gmail.com" target="_blank" rel="noopener noreferrer" >
                      <Envelope/>
                    </a>
                </p>
                <p id="contact-us">feel free to contact us!</p>
                
                <p id="small">
                <small >Made with <span role="img" aria-label="heart emoji">💖</span> by team horizon</small>
                </p>
        </footer>
    )
}
