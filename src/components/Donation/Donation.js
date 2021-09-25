import React, { useEffect, useState } from "react"
import ScrollTrigger from "react-scroll-trigger"

import "./style.css"

export default function Donation() {
  const [isRendered, setRender] = useState(false)
  const [t1, setT1] = React.useState(false)

  const onEnterViewport1 = () => {
    setT1(true)
  }
  const onExitViewport1 = () => {
    setT1(false)
  }

  useEffect(() => {
    if (!isRendered) {
      const script = document.createElement("script")
      const formelem = document.getElementById("donation")

      script.src = "https://checkout.razorpay.com/v1/payment-button.js"
      script.async = true
      script.setAttribute("data-payment_button_id", "pl_HzLb5hh3ERR1wg")

      formelem.appendChild(script)
      setRender(true)
    }
  }, [isRendered])

  return (
    <ScrollTrigger onEnter={onEnterViewport1} onExit={onExitViewport1}>
      <div id="donationContainer">
        <h2 id={`${t1 ? "animdonation" : ""}`}>Send Us some ❤️️:</h2>
        <form id="donation"></form>
      </div>
    </ScrollTrigger>
  )
}
