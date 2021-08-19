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
      'Those look like heavy dinosaur footprints, Andy has a sizeable hoof... Look, theres another letter resting on the windowsill'
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
          <p>Behind the curtain you discover some footprints. Was someone trying to climb in or out?</p>
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