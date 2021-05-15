import React, { useState } from "react";
import "./style.css";
import scrollTo from "gatsby-plugin-smoothscroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  const [colorChange, setColorchange] = useState(false);
  const isBrowser = typeof window !== "undefined";
  const changeNavColor = () => {
    if (isBrowser) {
      if (window.scrollY > 80) {
        setColorchange(true);
      } else {
        setColorchange(false);
      }
    }
  };
  if (isBrowser) {
    window.addEventListener("scroll", changeNavColor);
  }
  return (
    <nav className={colorChange ? "navscroll" : "navbar"}>
      <h1>Horizon</h1>
      <div>
        <button onClick={() => scrollTo("#about")}>About</button>
        <button onClick={() => scrollTo("#team")}>Team</button>
        <button onClick={() => scrollTo("#contact-us")}>Contact Us</button>
      </div>
      <div className="hamburger">
        <div className="dropbtn">
          <FontAwesomeIcon icon={faBars} />
        </div>
        <ul className="dropDown">
          <button onClick={() => scrollTo("#about")}>About</button>
          <button onClick={() => scrollTo("#team")}>Team</button>
          <button onClick={() => scrollTo("#contact-us")}>Contact Us</button>
        </ul>
      </div>
    </nav>
  );
}
