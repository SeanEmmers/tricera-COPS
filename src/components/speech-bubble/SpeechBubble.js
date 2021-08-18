import React from "react";
import { Button, CloseButton } from "react-bootstrap";
import "./SpeechBubble.css";
import { useState } from 'react';

const SpeechBubble = () => {

  const [ text, setText ] = useState("You must be the chief detective. Where have you been, we don't have much time. No time to answer. Let me introduce myself. I'm Triceracop, the officer in charge of this crime scene. The husband of the victim, Andy, reported the murder at 1am last night. He said he heard loud shouting, followed by a scream. When he entered the room there was no-one there except for his wife, lying dead on the floor.");
  const [ show, showText ] = useState(true)

  return (
    <div className = {show ? 'bubble' : 'close-bubble'}>
      <p> {text} </p>
      <br />
      <div className="pointer"></div>
      <CloseButton className="close-btn" size="sm" onClick={() => showText(false)} ></CloseButton>
      <div className="small-btn">
        <Button size="sm" variant="outline-secondary" onClick={() => setText("Your task is to investigate the crime scene and work out who the committed this cold-blooded murder. What are you waiting for, get searching for clues, with every second the you waste, the killer could be getting away…") }>
          Next...
        </Button>
      </div>
    </div>
  );
}

export default SpeechBubble