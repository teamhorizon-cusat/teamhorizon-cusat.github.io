import React from 'react';
import logo from "../../assets/images/HorizonLightTheme.png";
import { Image } from 'react-bootstrap';
import "./style.css";


const NewsHeader = () => {
    return(
        <div className="newsheader">
            <Image fluid src={logo} alt="horizon-logo" id="horizonLightTheme"/>
        <h2>To Mars And Beyond!</h2>
        <h3>New Updates <span role="img" aria-label="news emoji">📰</span></h3>
        </div>
    )
}

export default NewsHeader;