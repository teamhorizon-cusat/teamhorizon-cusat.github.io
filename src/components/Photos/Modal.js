import {Modal} from "react-bootstrap"
import React from "react"


function MyVerticallyCenteredModal(props) {

    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header >
        </Modal.Header>
        <Modal.Body>
          <img src={props.img} alt="images of the rover"/>
        </Modal.Body>
      </Modal>
    );
  }


export default MyVerticallyCenteredModal;