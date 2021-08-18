import EnvelopeBasic from "./envelope-images/Envelope.png";
import EnvelopeGlow from "./envelope-images/EnvelopeGlow.png";
import React from "react";
import { useState } from 'react';
import Letter from "../letter/Letter";
import SpeechBubbleReuse from "../speech-bubble/SpeechBubbleReuse";
import "./envelope.css";

const EnvelopeSeven = ({showOutline}) => {
  const [displayingLetter, showLetter] = useState(false);
  const [speechBubble, setSpeechbubble] = useState(false);

  const bubbleText = () => {
    return(
      'then it is time to decide who the killer is, I think it is clear!'
    )
  }

  const clickHandler = () => {
    showLetter(true);
    setSpeechbubble(true);
    showOutline(true);
  }
  
  const letterContent = () => {
    return(
      <div>
        <p>Dear Andy,</p>
        <p>I am worried about Priya</p>
        <p>She is rambling about her life being controlled by six naked monkey</p>
        <p>I think she needs to lay off the dino sauce</p>
        <p>Tiffany</p>
      </div>
    );
  }

  return(
    <div>
      <img className="envelopeOutline" id="envelopeSeven" onClick={() => clickHandler()} src={EnvelopeBasic} alt="envelope" onMouseOver={e => e.currentTarget.src = EnvelopeGlow } onMouseOut={e => e.currentTarget.src = EnvelopeBasic }/>
      <Letter displayingLetter={displayingLetter} showLetter={showLetter}>
        {letterContent()}
      </Letter>
      <SpeechBubbleReuse display={speechBubble} showBubble={setSpeechbubble} words={bubbleText}>
      </SpeechBubbleReuse>
    </div>
  );
}

export default EnvelopeSeven;