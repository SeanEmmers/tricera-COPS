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
      "Think nothing of that, Andy was always jealous of Priya, he is a violent hateful dinoman. It looks like there is one more letter..."
    )
  }

  const letterContent = () => {
    return(
      <div>
        <p>Dear Tiffany,</p>
        <p>Please help me,</p>
        <p>I have a suspicion that Priya is cheating on me</p>
        <p>I think I know who the slimy croc is too,</p>
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
      <img className="envelopeOutline" onClick={() => clickHandler()} src={EnvelopeBasic} alt="envelope" onMouseOver={e => e.currentTarget.src = EnvelopeGlow } onMouseOut={e => e.currentTarget.src = EnvelopeBasic }/>
      <Letter displayingLetter={displayingLetter} showLetter={showLetter}>
        {letterContent()}
      </Letter>
      <SpeechBubbleReuse display={speechBubble} showBubble={setSpeechbubble} words={bubbleText}>
      </SpeechBubbleReuse>
    </div>
  );
};

export default EnvelopeFive;