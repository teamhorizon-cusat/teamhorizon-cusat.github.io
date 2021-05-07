import { Link } from "gatsby";
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin,faFacebook,faInstagram,faYoutube } from '@fortawesome/free-brands-svg-icons'
import {faEnvelope} from '@fortawesome/free-solid-svg-icons'
import "./style.css";

export default function Footer() {
  return (
    <footer id="contact-us">
      <div className="contactus">
        <div className="social">
        <Link to='https://www.facebook.com/teamhorizoncusat/' target="_blank">
        <FontAwesomeIcon icon={faFacebook} title="facebook" />  share!</Link>
        </div>
        <div className="social">
        <Link to="https://www.instagram.com/teamhorizoncusat/" target="_blank">
        <FontAwesomeIcon icon={faInstagram} title="Instagram"/> follow</Link>
        </div>
        <div className="social">
        <Link to="https://www.linkedin.com/company/horizon-mars-rover-team/" target="_blank">
        <FontAwesomeIcon icon={faLinkedin} title="LinkedIn" /> connect</Link>
        </div >
        <div className="social">
        <Link to='https://youtu.be/yEy-2Nw_Bh4' target='_blank'>
        <FontAwesomeIcon icon={faYoutube} title="youtube"/> watch</Link>
        </div>
      </div>
      <div className="last-section">
        <p><FontAwesomeIcon icon={faEnvelope} title="email"/>email of the team</p>
        <p>Copyright 2021 Horizon</p>
      </div>
    </footer>
  );
}
