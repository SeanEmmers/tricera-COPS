import React from "react";
import { useState } from 'react';
import Popup from "../popup/PopUp";
import MirrorBasic from "./mirror-images/basic-mirror.png";
import MirrorGlow from "./mirror-images/highlighted-mirror.png";
import SpeechBubbleReuse from "../speech-bubble/SpeechBubbleReuse";
import "./Mirror.css";

const Mirror = ({mirrorMethod}) => {
  const [showPopup, setButtonPopup] = useState(false);
  const [speechBubble, setSpeechbubble] = useState(false);

  const mirrorClick = () =>{
    setButtonPopup(true);
    mirrorMethod(true);
    setSpeechbubble(true);
  }

  const bubbleText = () => {
    return(
      "Have these guys not heard of Dino-mail?"
    )
  }


  return(
    <div>
      <img className="mirrorOutline" onClick={() => mirrorClick()} src={MirrorBasic} alt="Mirror" onMouseOver={e => e.currentTarget.src = MirrorGlow } onMouseOut={e => e.currentTarget.src = MirrorBasic }/>
      <Popup show={showPopup} setShow={setButtonPopup}>
        <div>
          <p>As you move the frame of the mirror you notice that the frame has been replaced and moved recently. A small envelope falls out from behind the mirror.</p>
        </div>
      </Popup>
      <div>
        <SpeechBubbleReuse display={speechBubble} showBubble={setSpeechbubble} words={bubbleText} >
        </SpeechBubbleReuse>
      </div>
    </div>
  )
}

export default Mirror;