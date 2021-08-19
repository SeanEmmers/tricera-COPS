import EnvelopeBasic from "./envelope-images/Envelope.png";
import EnvelopeGlow from "./envelope-images/EnvelopeGlow.png";
import React from "react";
import { useState } from 'react';
import SpeechBubbleReuse from "../speech-bubble/SpeechBubbleReuse";
import Letter from "../letter/Letter";
import "./envelope.css";

const EnvelopeFive = ({letterSix}) => {
  const [displayingLetter, showLetter] = useState(false);
  const [speechBubble, setSpeechbubble] = useState(false);

  const bubbleText = () => {
    return(
      "Priya told me that Andy had always been insecure about her having a life outside their relationship. It looks like there is one more letter..."
    )
  }

  const letterContent = () => {
    return(
      <div>
        <p>Dear Tiffany,</p>
        <p>Priya was being distant again last night,</p>
        <p>I have a suspicion that she is cheating on me</p>
        <p>Last night I followed her to that bar where all the cops hang out</p>
        <p>She always liked a man in uniform</p>
        <p>Andy</p>
      </div>
    );
  }

  const clickHandler = () => {
    showLetter(true);
    setSpeechbubble(true);
    letterSix(true);

  }

  return(
    <div>
      <img className="envelopeOutline" id="envelopeFive" onClick={() => clickHandler()} src={EnvelopeBasic} alt="envelope" onMouseOver={e => e.currentTarget.src = EnvelopeGlow } onMouseOut={e => e.currentTarget.src = EnvelopeBasic }/>
      <Letter displayingLetter={displayingLetter} showLetter={showLetter}>
        {letterContent()}
      </Letter>
      <SpeechBubbleReuse display={speechBubble} showBubble={setSpeechbubble} words={bubbleText}>
      </SpeechBubbleReuse>
    </div>
  );
};

export default EnvelopeFive;