import React from 'react'
import './PopUp.css'
import { Container, Row, Col, CloseButton } from "react-bootstrap";

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
            </div>
          
        </Row>
      </Container>
    </div>
  ) : (
    ""
  );
}

export default Popup