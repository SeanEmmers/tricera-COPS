import React from 'react'
import './PopUp.css'
import { Container, Row, Col, CloseButton} from "react-bootstrap";



const Popup = (display) => {
  return display.show ? (
    <div className="popup">
      <Container>
        <Row>
          <Col></Col>
            <div className="popup-inner">
              <CloseButton
                className="close-btn"
                onClick={() => display.setShow(false)}
              >
                {" "}
              </CloseButton>
              {display.children}
            </div>
        </Row>
      </Container>
    </div>
  ) : (
    null
  );
}

export default Popup