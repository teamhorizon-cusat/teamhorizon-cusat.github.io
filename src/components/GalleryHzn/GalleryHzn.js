import React from "react"
import ImageGallery from "react-image-gallery"
import ScrollTrigger from "react-scroll-trigger"

import thpic1 from "../../assets/images/rover/thpic1.jpg"
import thpic3 from "../../assets/images/rover/thpic3.jpg"
import thpic5 from "../../assets/images/rover/thpic5.jpg"
import thpic6 from "../../assets/images/rover/thpic6c.jpg"
import thpic7 from "../../assets/images/rover/thpic7.jpg"
import "./style.css"

const images = [
  {
    original: thpic1,
    thumbnail: thpic1,
  },
  {
    original: thpic3,
    thumbnail: thpic3,
  },
  {
    original: thpic5,
    thumbnail: thpic5,
  },
  {
    original: thpic6,
    thumbnail: thpic6,
  },
  {
    original: thpic7,
    thumbnail: thpic7,
  },
]

const GalleryHzn = () => {
  const [t1, setT1] = React.useState(false)

  const onEnterViewport1 = () => {
    setT1(true)
  }
  const onExitViewport1 = () => {
    setT1(false)
  }

  return (
    <div className="galleryContainer">
      <ScrollTrigger onEnter={onEnterViewport1} onExit={onExitViewport1}>
        <h1 className="display-2" id={`gallery-head${t1 ? "-animate" : ""}`}>
          GALLERY
        </h1>
      </ScrollTrigger>
      <ImageGallery items={images} slideInterval={2000} autoPlay={true} />
    </div>
  )
}

export default GalleryHzn
