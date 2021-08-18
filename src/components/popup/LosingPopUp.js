import React from 'react'
import './PopUp.css'
import { Container, Row, Col } from "react-bootstrap";

const LoosingPopup = (display) => {
  return display.show ? (
    <div className="popup">
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