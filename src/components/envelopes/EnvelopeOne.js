import EnvelopeBasic from "./envelope-images/Envelope.png";
import EnvelopeGlow from "./envelope-images/EnvelopeGlow.png";
import React from "react";
import { useState } from 'react';
import Letter from "../letter/Letter";
import SpeechBubbleReuse from "../speech-bubble/SpeechBubbleReuse";
import "./envelope.css";

const EnvelopeOne = ({letterTwo}) => {
  const [displayingLetter, showLetter] = useState(false);
  const [speechBubble, setSpeechbubble] = useState(false);

  const bubbleText = () => {
    return(
      "Hmm interesting, a letter from one of our prime suspects to the other, concerning the murder victim. Makes you wonder. Andy was the husband of Priya, and Tiffany was her business partner. Only their DNA has been found at the crimescene so we presume it must have been one of the two of them. Here's another letter from Andy we found earlier."
    )
  }

  const letterContent = () => {
    return(
      <div>
        <p>Dear Andy,</p>
        <p>I am worried about Priya. She hasn't been herself lately, she's hardly been present in the office and seems very distracted. I can't help but think that there is something going on with her. Maybe I'm just overthinking this but in the 20 years I've known her I've never seen her be so aloof like this.</p>
        <p>Either way, I hope the two of you can still come over for lunch this Sunday, I'll be making vegetarian food for you guys, of course.</p>
        <p>Wishing you both the best,</p>
        <p>Tiffany</p>
      </div>
    );
  }

  const clickHandler = () => {
    showLetter(true);
    setSpeechbubble(true);
    letterTwo(true);

  }

  return(
    <div>
      <img className="envelopeOutline" id="envelopeOne" onClick={() => clickHandler()} src={EnvelopeBasic} alt="envelope" onMouseOver={e => e.currentTarget.src = EnvelopeGlow } onMouseOut={e => e.currentTarget.src = EnvelopeBasic }/>
      <Letter displayingLetter={displayingLetter} showLetter={showLetter}>
        {letterContent()}
      </Letter>
      <SpeechBubbleReuse display={speechBubble} showBubble={setSpeechbubble} words={bubbleText}>
      </SpeechBubbleReuse>
    </div>
  );
};

export default EnvelopeOne;