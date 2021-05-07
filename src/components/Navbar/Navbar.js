import React from "react";
import "./style.css";
import scrollTo from 'gatsby-plugin-smoothscroll';

export default function Navbar() {
  return (
      <nav>
        <h1>Horizon</h1>
        <div>
          <button onClick={() => scrollTo('#about')}>About</button>
          <button onClick={() => scrollTo('#timeline')}>Timeline</button>
          <button onClick={() => scrollTo('#team')}>Team</button>
          <a href="https://youtu.be/yEy-2Nw_Bh4" target="_blank" rel="noopener noreferrer">
            Promo
          </a>
          <button onClick={() => scrollTo('#contact-us')}>Contact Us</button>
        </div>
      </nav>
  );
}
