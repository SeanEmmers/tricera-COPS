import React from 'react'
import './PopUp.css'
import { Container, Row } from "react-bootstrap";

const LoosingPopup = (display) => {
  return display.show ? (
    <div className="losing-popup">
      <Container>
        <Row>
            <div className="popup-inner">
              {display.children}
            </div>
        </Row>
      </Container>
    </div>
  ) : (
    null
  );
}

export default LoosingPopup;