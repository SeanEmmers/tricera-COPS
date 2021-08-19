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
      'We have enough evidence. Inspect the chalk outline when you are ready to make your decision, I think it is clear! Cuff them detective!'
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
        <p>Andy,</p>
        <p>I am furious with Priya</p>
        <p>She claims the money had been stolen but I don't believe her</p>
        <p>There was a robbery but she was there, alone...</p>
        <p>The police took her statement but they couldn't find any evidence of a break in</p>
        <p>It must have been an inside job!</p>
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