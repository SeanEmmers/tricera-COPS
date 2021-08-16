import React from 'react'
import './PopUp.css'
import { Container, Row, Col, CloseButton, Button } from "react-bootstrap";

function Popup(props) {
  return props.trigger ? (
    <div className="popup">
      <Container>
        <Row>
          <Col></Col>
          <div className="popup-inner">
            <button
              className="close-btn"
              onClick={() => props.setTrigger(false)}
            >
              <CloseButton />{" "}
            </button>
            {props.children}
            <Button id="collectButton" variant="outline-warning">Collect item</Button>
          </div>
        </Row>
      </Container>
    </div>
  ) : (
    ""
  );
}

export default Popup