import React,{useState} from 'react'
import fa from '../../assets/images/team/t2.png';
import tl from '../../assets/images/team/t5.png';
import mh from '../../assets/images/team/t3.png';
import sh from '../../assets/images/team/t8.png';
import medh from '../../assets/images/team/t1.png';
import eh from '../../assets/images/team/t4.png';
import soh from '../../assets/images/team/t7.png';
import sph from '../../assets/images/team/t6.png';
import team from '../../assets/images/teamWork.png';
import './style.css';
import {Container,Row,Col,Image} from 'react-bootstrap';
import {Envelope,Linkedin} from 'react-bootstrap-icons';
import ScrollTrigger from 'react-scroll-trigger';

export default function Team() {
    const[t1,setT1] = useState(false);
    const[t2,setT2] = useState(false);
    const[t3,setT3] = useState(false);
    const[t4,setT4] = useState(false);
    const[t5,setT5] = useState(false);
    const[t6,setT6] = useState(false);
    const[t7,setT7] = useState(false);

    const onEnterViewport1 = ()=>{
        setT1(true);
      } 
    const onExitViewport1 = ()=>{
        setT1(false);
      }
      const onEnterViewport2 = ()=>{
        setT2(true);
      } 
    const onExitViewport2 = ()=>{
        setT2(false);
      } 
    const onEnterViewport3 = ()=>{
        setT3(true);
      }
    const onExitViewport3 = ()=>{
        setT3(false);
      }
      const onEnterViewport4 = ()=>{
        setT4(true);
      } 
    const onExitViewport4 = ()=>{
        setT4(false);
      }
      const onEnterViewport5 = ()=>{
        setT5(true);
      } 
    const onExitViewport5 = ()=>{
        setT5(false);
      } 
    const onEnterViewport6 = ()=>{
        setT6(true);
      }
    const onExitViewport6 = ()=>{
        setT6(false);
      }
      const onEnterViewport7 = ()=>{
        setT7(true);
      }
    const onExitViewport7 = ()=>{
        setT7(false);
      }

    return (
       
       <Container id="team">
           <Container className="text-center">
               <Row>
                   <Col md={6}>
                       <ScrollTrigger onEnter={onEnterViewport1} onExit={onExitViewport1}>
                         <h1 className="display-2" id={`team-main-head${t1?'-animate':''}`}>TEAM</h1>
                         <p className="lead" id={`${t1?'team-p-animate':''}`}>(main guys only)</p>
                       </ScrollTrigger>
                   </Col>
                   <Col md={6}>
                       <ScrollTrigger id="team-img-work" onEnter={onEnterViewport1} onExit={onExitViewport1} >
                            <Image fluid src={team} alt="teamwork pic" id={`team-base-img${t1?'-animate':''}`} />
                       </ScrollTrigger>
                   </Col>
               </Row>
              
           </Container>
           <Container id="team-card">
               <ScrollTrigger onEnter={onEnterViewport1} onExit={onExitViewport1} aria-label="animation for team">
               <div id={`image-container1${t1?'-animate':''}`}>
                    <Image src={fa} alt="the freaking awesome team members" id="team-img" />
                    <h4>Sheena K M</h4>
                    <p>Faculty Advisor | Associate Professor</p>
                    <p id="team-nick">(she is the light and torch on our path....little bit dramatic but true)</p>
                    <p><a href="mailto:sheenameerankunju@gmail.com" aria-label="button for emailing team member"><Envelope /></a></p>
                </div>
               </ScrollTrigger>
               <ScrollTrigger onEnter={onEnterViewport1} onExit={onExitViewport1} aria-label="animation for team">
               <div id={`image-container2${t1?'-animate':''}`}>
                    <Image src={tl} alt="the freaking awesome team members" id="team-img" />
                    <h4>Saransh Jha</h4>
                    <p>Team Lead</p>
                    <p id="team-nick">(the king and the lion...not in forest but in a zoo <span role="img" aria-label="just kidding emoji">😜</span>...dont go near his cage , tooth and claws are still strong)</p>
                    <p><a href="mailto:19it073sara@ug.cusat.ac.in"  aria-label="button for emailing team member"><Envelope/></a>
                    <a href="https://www.linkedin.com/in/saransh-jha-144b9318bv" aria-label="linked in link"><Linkedin/></a></p>
                </div>
               </ScrollTrigger>
               <ScrollTrigger onEnter={onEnterViewport2} onExit={onExitViewport2} aria-label="animation for team">
               <div id={`image-container3${t2?'-animate':''}`}>
                    <Image src={mh} alt="the freaking awesome team members" id="team-img" />
                    <h4>Nayan Jomi</h4>
                    <p>Mechanical Lead</p>
                    <p id="team-nick">(aka nayan ettan , our 3d guy and many other guy ...cracks some wit in team meeting)<br/>ps:-only he laughs better luck next time</p>
                    <p><a href="mailto:18me1061naya@ug.cust.ac.in"  aria-label="button for emailing team member"><Envelope/></a>
                    <a href="https://www.linkedin.com/in/nayan-jomi-6879551b2" aria-label="linked in link"><Linkedin/></a></p>
                </div>
               </ScrollTrigger>
               <ScrollTrigger onEnter={onEnterViewport3} onExit={onExitViewport3} aria-label="animation for team">
               <div id={`image-container4${t3?'-animate':''}`}>
                    <Image src={sh} alt="the freaking awesome team members" id="team-img" />
                    <h4>Vasant Joseph</h4>
                    <p>Science Team Lead</p>
                    <p id="team-nick">(our science bro , who juggles with  H2S,brandford reagent, drills down the soil, hunts down the aliens ....jeese slow down manh)</p>
                    <p><a href="mailto:vasantjoseph333@gmail.com" aria-label="button for emailing team member"><Envelope/></a>
                    <a href="https://www.linkedin.com/in/vasantjoseph/" aria-label="linked in link"><Linkedin/></a></p>
                </div>
               </ScrollTrigger>
               <ScrollTrigger onEnter={onEnterViewport4} onExit={onExitViewport4} aria-label="animation for team">
               <div id={`image-container5${t4?'-animate':''}`}>
                    <Image src={soh} alt="the freaking awesome team members" id="team-img" />
                    <h4>Utkrisht Pathak</h4>
                    <p>Software Lead</p>
                    <p id="team-nick">("he who gives soul maketh a god" , well he gives rover soul , sometimes crushes it, he is great in finding errors....learn to find good in errors bro)</p>
                    <p><a href="mailto:19cs095utkr@ug.cusat.ac.in" aria-label="button for emailing team member"><Envelope/></a>
                    <a href="https://www.linkedin.com/in/utkrisht-pathak-a9111a1b0" aria-label="linked in link"><Linkedin/></a></p>
                </div>
               </ScrollTrigger>
               <ScrollTrigger onEnter={onEnterViewport5} onExit={onExitViewport5} aria-label="animation for team">
               <div id={`image-container6${t5?'-animate':''}`}>
                    <Image src={eh} alt="the freaking awesome team members" id="team-img" />
                    <h4>Rafi Rasheed</h4>
                    <p>Electronics Lead</p>
                    <p id="team-nick">(he is the pro , even with a glance he prefects the circuit , electrons fear him nobody else....aka rafi ekka)</p>
                    <p><a href="mailto:rafirasheed@ug.cusat.ac.in" aria-label="button for emailing team member"><Envelope/></a>
                    <a href="https://www.linkedin.com/in/rafitc"aria-label="linked in link" ><Linkedin/></a></p>
                </div>
               </ScrollTrigger>
               <ScrollTrigger onEnter={onEnterViewport6} onExit={onExitViewport6} aria-label="animation for team">
               <div id={`image-container7${t6?'-animate':''}`}>
                    <Image src={medh} alt="the freaking awesome team members" id="team-img" />
                    <h4>Aman Deep</h4>
                    <p>Media Lead</p>
                    <p id="team-nick">(he organizes events and design content ...every content , image on this website ...is not designed by him but he creates poster, posts etc)</p>
                    <p><a href="mailto:18ee012aman@ug.cusat.ac.in" aria-label="button for emailing team member"><Envelope/></a>
                    <a href="https://www.linkedin.com/in/aman-deep-494236185" aria-label="linked in link"><Linkedin/></a></p>
                </div>
               </ScrollTrigger>
               <ScrollTrigger onEnter={onEnterViewport7} onExit={onExitViewport7} aria-label="animation for team">
               <div id={`image-container8${t7?'-animate':''}`}>
                    <Image src={sph} alt="the freaking awesome team members" id="team-img" />
                    <h4>Sumit Kumar Singh</h4>
                    <p>Sponsorship Head</p>
                    <p id="team-nick">(he keeps our cash registers ringing....ting,ting,ting...it has been silent for an year ..money<span role="img" aria-label="money flying emoji">💸💸</span> oh yeah)</p>
                    <p><a href="mailto:19cs091sumi@ug.cusat.ac.in" aria-label="button for emailing team member"><Envelope/></a>
                    <a href="https://www.linkedin.com/in/sumit-kumar-singh-aba334192/" aria-label="linked in link"><Linkedin/></a></p>
                </div>
               </ScrollTrigger>    
           </Container>
       </Container>
    )
}
