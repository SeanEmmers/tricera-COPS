import React from "react";
import { Button, CloseButton } from "react-bootstrap";
import "./SpeechBubble.css";
import { useState } from 'react';

const SpeechBubble = () => {

  const [ text, setText ] = useState('Hello I am Tricera-cop')
  const [ show, showText ] = useState(true)
  const [showingButton, buttonVisible] = useState(true)

  const nextClick = () => {
    setText("We are locked in here, I need your help to escape and catch the killer!");
    buttonVisible(false);
  };

  return (
    <div className = {show ? 'bubble' : 'close-bubble'}>
      <p> {text} </p>
      <br />
      <div className="pointer"></div>
      <CloseButton className="close-btn" size="sm" onClick={() => showText(false)} ></CloseButton>
      { showingButton ?     
        <div className="small-btn">
          <Button size="sm" variant="outline-secondary" onClick={() => nextClick()}>
            Next...
          </Button>
        </div> : null
      }
    </div>
  );
}

export default SpeechBubble