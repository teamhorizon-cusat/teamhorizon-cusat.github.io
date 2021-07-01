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
    const[li3,setLi3] = useState(false);
    const[li4,setLi4] = useState(false);

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
      const onEnterViewport3 = ()=>{
        setLi3(true);
      } 
    const onExitViewport3 = ()=>{
        setLi3(false);
      }
      const onEnterViewport4 = ()=>{
        setLi4(true);
      } 
    const onExitViewport4 = ()=>{
        setLi4(false);
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
                    <ScrollTrigger onEnter={onEnterViewport1} onExit={onExitViewport1}>
                    <li data-number="1" id={`${li1?'milestone-li':''}`}>
                        <h4>Qualified URC 2020 PDR</h4>
                        <p>Got placed among top 96 teams in the world , in very first attempt</p>
                    </li>
                    </ScrollTrigger>
                    <ScrollTrigger onEnter={onEnterViewport2} onExit={onExitViewport2}>
                    <li data-number="2" id={`${li2?'milestone-li':''}`}>
                        <h4>ERC 2020</h4>
                        <p>Got placed at rank 32</p>
                    </li>
                    </ScrollTrigger>
                    <ScrollTrigger onEnter={onEnterViewport3} onExit={onExitViewport3}>
                    <li data-number="3" id={`${li3?'milestone-li':''}`}>
                        <h4>Qualified URC 2021 PDR</h4>
                        <p>Qualified PDR among top 88 teams and only team from kerala to do so for two consecutive years</p>
                    </li>
                    </ScrollTrigger>
                    <ScrollTrigger onEnter={onEnterViewport4} onExit={onExitViewport4}>
                    <li data-number="4" id={`${li4?'milestone-li':''}`}>
                        <h4>Conducted Workshops</h4>
                        <p>conducted online workshops on industrial skills that were used in ROVER building solidworks,blender designing and arduino 150+ students from 15 different campus joined</p>
                    </li>
                    </ScrollTrigger>         
                </ul>
            </Container>
        </Container>
    )
}
