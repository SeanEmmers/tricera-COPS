import FireplaceImage from "./fireplace-images/FirePlace.png";
import FireplaceGlow from "./fireplace-images/FirePlaceGlow.png";
import Popup from "../popup/PopUp";
import "./FirePlace.css";
import React from "react";
import { useState } from 'react';
import SpeechBubbleReuse from "../speech-bubble/SpeechBubbleReuse";

const Fireplace = ({fireplaceMethod}) => {
  const [showPopup, setButtonPopup] = useState(false);
  const [speechBubble, setSpeechbubble] = useState(false);

  const bubbleText = () => {
    return(
      "Hey look, a letter has appeared"
    )
  }

  const fireplaceClick = () => {
    fireplaceMethod(true);
    setButtonPopup(true);
    setSpeechbubble(true);
  };

  return(
    <div>
      <img className="fireplaceobject" onClick={() => fireplaceClick()} 
        src={FireplaceImage} alt="Fireplace" 
        onMouseOver={e => e.currentTarget.src = FireplaceGlow } 
        onMouseOut={e => e.currentTarget.src = FireplaceImage }
      />
      <Popup show={showPopup} setShow={setButtonPopup}>
        <div>
          <p>Inside the dusty fireplace you find a broken 'tooth'</p>
        </div>
      </Popup>
      <div>
        <SpeechBubbleReuse display={speechBubble} showBubble={setSpeechbubble} words={bubbleText} >
        </SpeechBubbleReuse>
      </div>
    </div>
  )
};

export default Fireplace;