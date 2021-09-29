import React from "react"
import thpic1 from "../../assets/images/rover/thpic1.jpg"
import thpic2 from "../../assets/images/rover/thpic2.jpg"
import thpic3 from "../../assets/images/rover/thpic3.jpg"
import thpic5 from "../../assets/images/rover/thpic5.jpg"
import thpic6 from "../../assets/images/rover/thpic6c.jpg"
import thpic7 from "../../assets/images/rover/thpic7.jpg"
import { Container } from "react-bootstrap"
import ScrollTrigger from "react-scroll-trigger"
import "./style.css"

const SlidingG = () => {
  const [t1, setT1] = React.useState(false)

  const onEnterViewport1 = () => {
    setT1(true)
  }
  const onExitViewport1 = () => {
    setT1(false)
  }

  const goLeft = e => {
    const PictureList = document.getElementById("pictureList")
    const lastPic = PictureList.lastChild
    lastPic.style.zIndex = ""
    const firstPic = PictureList.firstChild
    PictureList.removeChild(PictureList.firstChild)
    firstPic.style.zIndex = -1
    PictureList.appendChild(firstPic)
  }

  const goRight = e => {
    const PictureList = document.getElementById("pictureList")
    const lastPic = PictureList.lastChild
    lastPic.style.zIndex = ""
    const firstPic = PictureList.firstChild
    PictureList.removeChild(PictureList.lastChild)
    PictureList.insertBefore(lastPic, firstPic)
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
          <h1 className="display-2" id={`gallery-head${t1 ? "-animate" : ""}`}>
            GALLERY
          </h1>
        </ScrollTrigger>
      </Container>
      <div className="gallery_container">
        <ol id="pictureList">
          <li>
            <img
              id="galleryPic0"
              src={photos[0].src}
              className="gallery-img"
              alt="images of the rover"
            />
          </li>
          <li>
            <img
              id="galleryPic1"
              src={photos[5].src}
              className="gallery-img"
              alt="images of the rover"
            />
          </li>
          <li>
            <img
              id="galleryPic2"
              src={photos[2].src}
              className="gallery-img"
              alt="images of the rover"
            />
          </li>
          <li>
            <img
              id="galleryPic3"
              src={photos[3].src}
              className="gallery-img"
              alt="images of the rover"
            />
          </li>
          <li>
            <img
              id="galleryPic4"
              src={photos[4].src}
              className="gallery-img"
              alt="images of the rover"
            />
          </li>
        </ol>
      </div>
      <div className="galleryButtons">
        <button id="right" onClick={goLeft}>
          &lt;&lt;
        </button>
        <button id="left" onClick={goRight}>
          &gt;&gt;
        </button>
      </div>
    </>
  )
}

export default SlidingG
