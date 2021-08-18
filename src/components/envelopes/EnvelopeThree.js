import EnvelopeBasic from "./envelope-images/Envelope.png";
import EnvelopeGlow from "./envelope-images/EnvelopeGlow.png";
import React from "react";
import { useState } from 'react';
import SpeechBubbleReuse from "../speech-bubble/SpeechBubbleReuse";
import Letter from "../letter/Letter";
import "./envelope.css";

const EnvelopeThree = ({letterFour}) => {
  const [displayingLetter, showLetter] = useState(false);
  const [speechBubble, setSpeechbubble] = useState(false);

  const bubbleText = () => {
    return(
      "Me and Priya are buds, I don't trust Tiffany, she eats vegetables. Hey look, another letter."
    )
  }

  const letterContent = () => {
    return(
      <div>
        <p>Dear Tricera-cop,</p>
        <p>You are the only one I can trust</p>
        <p>pls help,</p>
        <p>Priya</p>
      </div>
    );
  }

  const clickHandler = () => {
    showLetter(true);
    setSpeechbubble(true);
    letterFour(true);

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

export default EnvelopeThree;