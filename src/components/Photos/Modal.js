import { Modal } from "react-bootstrap"
import React from "react"

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="modal__content"
    >
      <Modal.Header className="modal__header"></Modal.Header>
      <Modal.Body className="modal__body">
        <img src={props.img} alt="images of the rover" />
      </Modal.Body>
    </Modal>
  )
}

export default MyVerticallyCenteredModal
