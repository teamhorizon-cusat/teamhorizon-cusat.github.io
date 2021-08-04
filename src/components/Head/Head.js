import React from "react"
import { Helmet } from "react-helmet"


export default function Head() {
    return (
            <Helmet>
                <title>Team Horizon</title>
                <meta name="title" content="Team Horizon" />
                <meta name="description" content="Team Horizon represents CUSAT in URC. Group of interdisciplinary students trying to build space rovers for mars and beyond" />

                <meta property="og:type" content="website"/>
                <meta property="og:url" content="https://www.teamhorizon.live/"/>
                <meta property="og:title" content="Team Horizon"/>
                <meta property="og:description" content="Team Horizon represents CUSAT in URC. Group of interdisciplinary students trying to build space rovers for mars and beyond"/>
                <meta property="og:image" content="https://user-images.githubusercontent.com/33504045/128237060-afe375cb-9cd5-4096-8313-5fd2858b58ea.JPG"/>

                <meta property="twitter:card" content="summary_large_image"/>
                <meta property="twitter:url" content="https://www.teamhorizon.live/"/>
                <meta property="twitter:title" content="Team Horizon" />
                <meta property="twitter:description" content="Team Horizon represents CUSAT in URC. Group of interdisciplinary students trying to build space rovers for mars and beyond"/>
                <meta property="twitter:image" content="https://user-images.githubusercontent.com/33504045/128237060-afe375cb-9cd5-4096-8313-5fd2858b58ea.JPG"></meta>
            </Helmet>
    )
}
