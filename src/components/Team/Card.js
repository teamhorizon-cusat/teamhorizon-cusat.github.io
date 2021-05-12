import React from "react";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function Card(props) {
  return (
    <div>
      <div className="card">
        <div className="container">
          {props.children}
          <div className="details">
            <h3>{props.name}</h3>
            <p>{props.post}</p>
            <div className="detailsLinks">
              <FontAwesomeIcon icon={faEnvelope} title="email" />
              <span>{props.email}</span>
              <br />
              {props.linkedin != "" ? (
                <div>
                  <FontAwesomeIcon icon={faLinkedin} title="LinkedIn" />
                  <span>
                    <a
                      href={"https://www.linkedin.com/" + props.linkedin}
                      target="_blank"
                    >
                      {props.linkedin}
                    </a>
                  </span>
                </div>
              ) : (
                <div>
                  <span></span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
