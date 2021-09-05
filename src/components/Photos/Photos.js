import React from "react"
import thpic1 from "../../assets/images/rover/thpic1.jpg"
import thpic2 from "../../assets/images/rover/thpic2.jpg"
import thpic3 from "../../assets/images/rover/thpic3.jpg"
import thpic5 from "../../assets/images/rover/thpic5.jpg"
import thpic6 from "../../assets/images/rover/thpic6c.jpg"
import thpic7 from "../../assets/images/rover/thpic7.jpg"
import "./style.css"
import ScrollTrigger from "react-scroll-trigger"
import { Container} from "react-bootstrap"
import MyVerticallyCenteredModal from "./Modal.js"

export default function Photos() {
  const [t1, setT1] = React.useState(false)
  const [modalShow, setModalShow] = React.useState(false);
  const [pic, setPic] = React.useState(thpic7);
  const [width, setWidth] = React.useState(window.innerWidth);
  const breakpoint = 620;

  React.useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  }, []);

  
  const onEnterViewport1 = () => {
    setT1(true)
  }
  const onExitViewport1 = () => {
    setT1(false)
  }

  const photos = [
    {
      src: thpic6,
      width: 1,
      height: 1,
    },
    {
      src: thpic2,
      width: 1,
      height: 1,
    },
    {
      src: thpic3,
      width: 1,
      height: 1,
    },
    {
      src: thpic5,
      width: 1,
      height: 1,
    },
    {
      src: thpic7,
      width: 1,
      height: 1,
    },
    {
      src: thpic1,
      width: 1,
      height: 1,
    },
  ]
  return (
    <>
      <Container className="mt-5">
            <ScrollTrigger onEnter={onEnterViewport1} onExit={onExitViewport1}>
              <h1
                className="display-2"
                id={`gallery-head${t1 ? "-animate" : ""}`}
              >
                GALLERY
              </h1>
            </ScrollTrigger>
      </Container>
      <div className="photos">
        {photos.map((val, index) => {
          if(width>breakpoint)
          return <button onClick={() => {setModalShow(true); setPic(val.src)}}><img id={index} src={val.src} className="gallery-img" 
          alt="images of the rover"/></button>
          else
          return <img id={index} src={val.src} className="gallery-img" alt="images of the rover"/>
        })}

      </div>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        img={pic}
      />
      
    </>
  )
}
