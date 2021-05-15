import { Link } from "gatsby";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faFacebook,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {contactus,social,lastsection,copyright,colorL,colorF} from "./footer.module.css";

export default function Footer() {
   let share, connect,post,watch;
    if(window.innerWidth>500){
      share =" share!";
      connect=" connect";
      post=" post";
      watch=" watch";
    }
  
  return (
    <footer id="contact-us">
      <div className={contactus}>
        <div className={social} >
          <Link to="https://www.facebook.com/teamhorizoncusat/" target="_blank" className={colorL}>
            <FontAwesomeIcon icon={faFacebook} title="facebook" className={colorF}/>{share}
          </Link>
        </div>
        <div className={social}>
          <Link
            to="https://www.instagram.com/teamhorizoncusat/"
            target="_blank" className={colorL}
          >
            <FontAwesomeIcon icon={faInstagram} title="Instagram"  className={colorL}/>{post}
          </Link>
        </div>
        <div className={social}>
          <Link
            to="https://www.linkedin.com/company/horizon-mars-rover-team/"
            target="_blank" className={colorL}
          >
            <FontAwesomeIcon icon={faLinkedin} title="LinkedIn"  className={colorL}/> {connect}
          </Link>
        </div>
        <div className={social}>
          <Link to="https://youtu.be/yEy-2Nw_Bh4" target="_blank" className={colorL}>
            <FontAwesomeIcon icon={faYoutube} title="youtube" className={colorL} /> {watch}
          </Link>
        </div>
      </div>
      <div className={lastsection}>
        <p>
          <FontAwesomeIcon icon={faEnvelope} title="email" />{" "}
          roverhrzerc@gmail.com
        </p>
        <p className={copyright}>Copyright 2021 Horizon</p>
      </div>
    </footer>
  );
}
