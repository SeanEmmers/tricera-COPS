import React from "react";
import { Button, CloseButton } from "react-bootstrap";
import "./SpeechBubble.css";
import { useState } from 'react';
import { propTypes } from "react-bootstrap/esm/Image";

const SpeechBubble = () => {

  const [ text, setText ] = useState('Hello I am Tricera-cop')
  const [ show, showText ] = useState(true)

  return (
    <div className = {show ? 'bubble' : 'close-bubble'}>
      <p> {text} </p>
      <br />
      <div className="pointer"></div>
      <CloseButton className="close-btn" size="sm" onClick={() => showText(false)} ></CloseButton>
      <div className="small-btn">
        <Button size="sm" variant="outline-secondary" onClick={() => setText("We are locked in here, I need your help to escape and catch the killer!") }>
          Next...
        </Button>
      </div>
    </div>
  );
}

export default SpeechBubble