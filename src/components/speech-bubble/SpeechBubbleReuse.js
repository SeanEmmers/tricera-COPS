import React from "react";
import { Button, CloseButton } from "react-bootstrap";
import "./SpeechBubble.css";

const SpeechBubbleReuse = (text) => {

  return text.display ? (
    <div className = 'bubble'>
      <p> {text.children} </p>
      <br />
      <div className="pointer"></div>
      <CloseButton className="close-btn" size="sm" onClick={() => text.showBubble(false)} ></CloseButton>
      <div className="small-btn">
      </div>
    </div>
  ) : (
    null
  );
}

export default SpeechBubbleReuse;