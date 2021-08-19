import React from "react";
import { useState } from 'react';
import SpeechBubbleReuse from "../speech-bubble/SpeechBubbleReuse";
import Cop from "./dino-images/triceCOP.png";
import "./Dino.css";

const DinoCop = () => {
  const [speechBubble, setSpeechbubble] = useState(false);

  const bubbleText = () => {
    return(
      "Hey, don't poke me"
    )
  }

  return (
    <div>
      <img className="cop" src={Cop} alt="TriceraCop" onClick={() => setSpeechbubble(true)}/>
      <SpeechBubbleReuse display={speechBubble} showBubble={setSpeechbubble} words={bubbleText}>
      </SpeechBubbleReuse>
    </div>
  );
};

export default DinoCop;
