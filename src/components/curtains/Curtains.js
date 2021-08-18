import CurtainsImage from "./curtain-images/Curtains.png";
import CurtainsGlow from "./curtain-images/CurtainsGlow.png";
import Popup from "../popup/PopUp";
import SpeechBubbleReuse from "../speech-bubble/SpeechBubbleReuse";
import "./Curtains.css";
import React from "react";
import { useState } from 'react';

const Curtains = ({curtainMethod}) => {
  const [showPopup, setButtonPopup] = useState(false);
  const [speechBubble, setSpeechbubble] = useState(false);

  const curtainsClick = () => {
    curtainMethod(true);
    setButtonPopup(true);
    setSpeechbubble(true);
  };

  const bubbleText = () => {
    return(
      'Hmm interesting, it looks like someone tried to climb out. You also discovered on more letter. Read it'
    )
  }

  return(
    <div>
      <img className="curtainsobject" onClick={() => curtainsClick()} 
        src={CurtainsImage} alt="Curtains" 
        onMouseOver={e => e.currentTarget.src = CurtainsGlow } 
        onMouseOut={e => e.currentTarget.src = CurtainsImage }
      />
      <Popup show={showPopup} setShow={setButtonPopup}>
        <div>
          <p>Behind the curtain you discover some footprints, was someone trying to climb in? OR OUT ??</p>
        </div>
      </Popup>
      <div>
        <SpeechBubbleReuse display={speechBubble} showBubble={setSpeechbubble} words={bubbleText} >
        </SpeechBubbleReuse>
      </div>
    </div>
  )
};

export default Curtains