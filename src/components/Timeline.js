import React from 'react'
import {timelinecontent,timeline,event} from '../styles/timeline.module.css'

export default function Timeline() {
    return (
    <div className={timelinecontent}>
         <h1>Timeline</h1>
            <ul className={timeline}>
                <li className={event} data-date="JAN 2020">
                    <h3>Qualified URC 2020 PDR</h3>
                        <p>Got placed among top 96 teams in the world , in very first attempt</p>
                </li>
                <li className={event} data-date="SEPT 2020">
                    <h3 >ERC 2020</h3>
                        <p>Got placed at rank 32 </p>    
                </li>
                <li className={event} id="date" data-date="JAN 2021">
                    <h3 >Qualified URC 2021 PDR</h3>
                        <p>Qualified PDR among top 88 teams and only team from keral to do so for two consecutive years</p>    
                </li>
                
                <li className={event} data-date="APR 2021">
                    <h3>Conducted Workshops</h3>
                        <p>conducted online workshops on industrial skills that were used in ROVER building solidworks,blender</p>
                        <p>designing and arduino <em><strong>150+ students from 15 different campus joined</strong></em> </p>
                </li>
            </ul>
    </div>
    )
}
