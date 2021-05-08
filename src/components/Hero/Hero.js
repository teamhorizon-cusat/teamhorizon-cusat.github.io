import React from 'react'
import {header} from "./hero.module.css"
import { StaticImage } from "gatsby-plugin-image"

export default function Hero() {
    return (
        <section className={header}>
            <div>
              <h2>Building next</h2>
              <h3>Gen Rover</h3>
              <p>By team horizon</p>
            </div>
            <StaticImage  src ="../../assets/images/logo/rover.png" alt="logo"/>
        </section>
    )
}
