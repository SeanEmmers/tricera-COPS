import React from "react";
import { useState } from 'react';
import RoomOneImage from "./landing-room-images/RoomOneImage.jpeg";
import Inventory from "../inventory/Inventory";
import SpeechBubbleReuse from "../speech-bubble/SpeechBubbleReuse";
import SpeechBubble from "../speech-bubble/SpeechBubble";
import Fireplace from "../fireplace/FirePlace";
import Curtains from "../curtains/Curtains";
import Mirror from "../mirror/Mirror";
import ChalkOutline from "../chalkoutline/ChalkOutline";
import Door from "../door/Door";
import DinoCop from "../dino-cop/Dino";
import Jar from "../jar/Jar";
import Tooth from "../clues/Tooth";

const LandingRoom = () => {
  const [showDoor, setDoor] = useState(false);
  const [showMirror, setMirror] = useState(false);

  return (
    <div className="LandingRoom">
      <div className="parent">
        <img className="backgroundImage" src={RoomOneImage} alt="TriceraCop" />
        <Curtains curtainsMethod = {setMirror}/>
        <ChalkOutline chalkoutlineMethod = {setMirror}/>
        <DinoCop />
        {showDoor ? <Door /> : null}
        <Jar mirrorMethod = {setMirror}/>
        {showMirror ? <Tooth /> : null}
        <SpeechBubble />
        <SpeechBubbleReuse />
        {showMirror ? <Mirror doorMethod = {setDoor} /> : null}
        <Inventory />
        <Fireplace fireplaceMethod = {setMirror}/>
      </div>
    </div>
  );
};

export default LandingRoom;
