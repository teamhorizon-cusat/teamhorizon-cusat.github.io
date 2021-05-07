import React from "react";
import * as aboutStyles from "./about.module.css";
import { StaticImage } from "gatsby-plugin-image"

export default function About() {
  return (
    <div className={aboutStyles.container} id="about">
      <div>
        <StaticImage className={aboutStyles.logo} src ="../../assets/images/logo/horizon.png" alt="logo"/>
      </div>
      <div className={aboutStyles.content}>
        <h2 className={aboutStyles.head}>About</h2>
        <p>
          Team Horizon represents CUSAT in URC. Cochin University of Science and
          Technology (CUSAT) occupies a unique place on the academic road map of
          Asia as a premier institution for higher education. The University’s
          motto ‘Tejasswinavadhitamasthu’ meaning ‘may thewisdom accrued deify us
          both - the teacher and the taught and percolateto the universe in its
          totality. The pursuit of excellence through these programmes has given
          CUSAT national and international acclaim
        </p>
      </div>
    </div>
  );
}
