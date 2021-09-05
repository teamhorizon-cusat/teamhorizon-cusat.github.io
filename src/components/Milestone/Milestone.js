import React,{useState} from 'react';
import './style.css';
import stair from '../../assets/images/stair.png';
import chara from '../../assets/images/chara.png';
import sand from '../../assets/images/sandClock.png';
import { Container,Image } from 'react-bootstrap';
import ScrollTrigger from 'react-scroll-trigger';

export default function Milestone() {
    const[visible,setVisible] = useState(false);
    const[li1,setLi1] = useState(false);
    const[li2,setLi2] = useState(false);
    const[li4,setLi4] = useState(false);
    const[li5,setLi5] = useState(false);
    const[li6,setLi6] = useState(false);

   const onEnterViewport = ()=>{
        setVisible(true);
      } 
    const onExitViewport = ()=>{
        setVisible(false);
      }
      const onEnterViewport1 = ()=>{
        setLi1(true);
      } 
    const onExitViewport1 = ()=>{
        setLi1(false);
      }
      const onEnterViewport2 = ()=>{
        setLi2(true);
      } 
    const onExitViewport2 = ()=>{
        setLi2(false);
      }
      const onEnterViewport4 = ()=>{
        setLi4(true);
      } 
    const onExitViewport4 = ()=>{
        setLi4(false);
      }
      const onEnterViewport5 = ()=>{
        setLi5(true);
      } 
    const onExitViewport5 = ()=>{
        setLi5(false);
      }
      const onEnterViewport6 = ()=>{
        setLi6(true);
      } 
    const onExitViewport6 = ()=>{
        setLi6(false);
      }
      
      
    return (
        <Container className="mt-5 pt-5 mb-5 pb-5">
                <ScrollTrigger className="mx-auto" onEnter={onEnterViewport} onExit={onExitViewport}>
                    <Container className="text-center" id="milestone-image">
                        <Image fluid src={stair} alt="stair" id={`stair${visible?'-animate':''}`}/>
                        <Image fluid src={chara} alt="chara" id={`chara${visible?'-animate':''}`}/>
                        <Image fluid src={sand} alt="sand" id={`sand${visible?'-animate':''}`}/>
                        <h1 className="display-2" id="milestone-head">MILESTONES</h1>
                    </Container>
                </ScrollTrigger>
            
            <Container className="mt-5 text-center mx-auto">
                <ul id="milestone">
                    <ScrollTrigger onEnter={onEnterViewport1} onExit={onExitViewport1} >
                    <li data-number="1" id={`${li1?'milestone-li':''}`}>
                        <h4>Qualified URC 2020 PDR</h4>
                        <p>Made it to the top 96 teams globally in our first attempt for the University Rover Challenge organized by the ' Mars Society, United States of America '.</p>
                    </li>
                    </ScrollTrigger>
                    <ScrollTrigger onEnter={onEnterViewport2} onExit={onExitViewport2}>
                    <li data-number="2" id={`${li2?'milestone-li':''}`}>
                        <h4>3rd in India for ERC 2020</h4>
                        <p>With a World Rank of 32, we secured 3rd place in india and 1st in kerala! and made our way to several<a target="_blank" rel="noreferrer" href="https://english.mathrubnhumi.com/education/articles/cusat-team-enters-round-2-of-university-rover-challenge-1.5365311">newspaper headlies</a></p>
                    </li>
                    </ScrollTrigger>
                    <ScrollTrigger onEnter={onEnterViewport4} onExit={onExitViewport4}>
                    <li data-number="4" id={`${li4?'milestone-li':''}`}>
                        <h4>Qualified URC 2021 PDR</h4>
                        <p>Only team from Kerala to do so for two consecutive years! ( 2020 & 2021 ) </p>
                    </li>
                    </ScrollTrigger>
                    <ScrollTrigger onEnter={onEnterViewport5} onExit={onExitViewport5}>
                    <li data-number="5" id={`${li5?'milestone-li':''}`}>
                        <h4>Two Subteams outperform all other teams in the world</h4>
                        <p>Our Science and CAD subteam secured highest points in the world for SAR of URC 2021 </p>
                    </li>
                    </ScrollTrigger>
                    <ScrollTrigger onEnter={onEnterViewport6} onExit={onExitViewport6}>
                    <li data-number="6" id={`${li6?'milestone-li':''}`}>
                        <h4>Conducted Workshops</h4>
                        <p>We have conducted various workshops teaching industry-level skills(AutoCAD, Solidworks, Blender, Arduino, PCB Design, etc....)where over 150 students from over  15 campuses all over the country participated.</p>
                    </li>
                    </ScrollTrigger>
                    
                          
                </ul>
            </Container>
        </Container>
    )
}
