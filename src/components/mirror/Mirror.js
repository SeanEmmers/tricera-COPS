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
      "Hmm, it looks like ther was also another note hidden behind the mirror there..."
    )
  }


  return(
    <div>
      <img className="mirrorOutline" onClick={() => mirrorClick()} src={MirrorBasic} alt="Mirror" onMouseOver={e => e.currentTarget.src = MirrorGlow } onMouseOut={e => e.currentTarget.src = MirrorBasic }/>
      <Popup show={showPopup} setShow={setButtonPopup}>
        <div>
          <p>As you move the frame of the mirror some broken you notice some small shards of glass on the mantelpiece, it looks like it has been replaced recently...</p>
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