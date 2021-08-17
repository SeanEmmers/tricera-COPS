import React from 'react'
import './letter.css'
import { Container, Row, Col, CloseButton, Button } from "react-bootstrap";

const Letter = (props) => {
  return props.trigger ? (
    <div className="letter">
      <Container>
        <Row>
          <Col></Col>
            <div className="letter-inner">
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
    null
  );
}

export default Letter