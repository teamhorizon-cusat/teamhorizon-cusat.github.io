import React from "react";
import "./style.css";
import Card from "./Card";
import { StaticImage } from "gatsby-plugin-image";

export default function Team() {
  let people = {
    saransh: {
      name: "Saransh Jha",
      post: "Team Lead",
      email: "19it073sara@ug.cusat.ac.in",
      linkedin: "in/saransh-jha-144b9318b",
    },
    nayan: {
      name: "Nayan Jomi",
      post: "Mechanical Head",
      email: "18me1061naya@ug.cust.ac.in",
      linkedin: "in/nayan-jomi-6879551b2",
    },
    vasant: {
      name: "Vasant Joseph",
      post: "Science Team Head",
      email: "vasantjoseph333@gmail.com",
      linkedin: "in/vasantjoseph/",
    },
    aman: {
      name: "Aman Deep",
      post: "Media Head",
      email: "18ee012aman@ug.cusat.ac.in",
      linkedin: "in/aman-deep-494236185",
    },
    rafi: {
      name: "Rafi Rasheed",
      post: "Electronics Head",
      email: "rafirasheed@ug.cusat.ac.in",
      linkedin: "in/rafitc",
    },
    utkrisht: {
      name: "Utkrisht Pathak",
      post: "Software Head",
      email: "19cs095utkr@ug.cusat.ac.in",
      linkedin: "in/utkrisht-pathak-a9111a1b0",
    },
    sumit: {
      name: "Sumit Kumar Singh",
      post: "Sponsorship Head",
      email: "19cs091sumi@ug.cusat.ac.in",
      linkedin: "in/sumit-kumar-singh-aba334192",
    },
    sheena: {
      name: "Sheena K M",
      post: "Faculty Advisor | Associate Professor",
      email: "sheenameerankunju@gmail.com",
      linkedin: "",
    },
  };
  return (
    <div id="team">
      <h1 className="xcenter">Team Horizon</h1>
      <h4 className="xcenter teamLeads">CORE TEAM LEADS</h4>
      <div className="people">
        <Card {...people.sheena}>
          <StaticImage
            src="../../assets/images/team/Sheena.png"
            alt="member"
            className="image"
          />
        </Card>
        <Card {...people.saransh}>
          <StaticImage
            src="../../assets/images/team/Saransh.png"
            alt="member"
            className="image"
          />
        </Card>
        <Card {...people.nayan}>
          <StaticImage
            src="../../assets/images/team/Nayan.jpg"
            alt="member"
            className="image"
          />
        </Card>
        <Card {...people.vasant}>
          <StaticImage
            src="../../assets/images/team/Vasant.jpg"
            alt="member"
            className="image"
          />
        </Card>
        <Card {...people.aman}>
          <StaticImage
            src="../../assets/images/team/Aman_Deep.jpg"
            alt="member"
            className="image"
          />
        </Card>
        <Card {...people.rafi}>
          <StaticImage
            src="../../assets/images/team/Rafi_Rasheed.jpg"
            alt="member"
            className="image"
          />
        </Card>
        <Card {...people.utkrisht}>
          <StaticImage
            src="../../assets/images/team/Utkrisht_Pathak.jpg"
            alt="member"
            className="image"
          />
        </Card>
        <Card {...people.sumit}>
          <StaticImage
            src="../../assets/images/team/Sumit_Kumar_Singh.jpg"
            alt="member"
            className="image"
          />
        </Card>
      </div>
    </div>
  );
}
