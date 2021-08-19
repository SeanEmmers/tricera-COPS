import EnvelopeBasic from "./envelope-images/Envelope.png";
import EnvelopeGlow from "./envelope-images/EnvelopeGlow.png";
import React from "react";
import { useState } from 'react';
import SpeechBubbleReuse from "../speech-bubble/SpeechBubbleReuse";
import Letter from "../letter/Letter";
import "./envelope.css";

const EnvelopeTwo = (props) => {
  const [displayingLetter, showLetter] = useState(false);
  const [speechBubble, setSpeechbubble] = useState(false);

  const bubbleText = () => {
    return(
      "It looks like Andy and Priya's relationship has not been going well, perhaps he finally snapped? Let's search for more clues"
    )
  }

  const clickHandler = () => {
    showLetter(true);
    setSpeechbubble(true);
  }

  return(
    <div>
      <img className="envelopeOutline" id="envelopeTwo" onClick={() => clickHandler()} src={EnvelopeBasic} alt="envelope" onMouseOver={e => e.currentTarget.src = EnvelopeGlow } onMouseOut={e => e.currentTarget.src = EnvelopeBasic }/>
      <Letter displayingLetter={displayingLetter} showLetter={showLetter}>
        {props.letterContent}
      </Letter>
      <SpeechBubbleReuse display={speechBubble} showBubble={setSpeechbubble} words={bubbleText}>
      </SpeechBubbleReuse>
    </div>
  );
}

export default EnvelopeTwo;
