import React from "react";
import { useState } from 'react';
import RoomOneImage from "./landing-room-images/RoomOneImage.jpeg";
import Inventory from "../inventory/Inventory";
import SpeechBubbleReuse from "../speech-bubble/SpeechBubbleReuse";
import SpeechBubble from "../speech-bubble/SpeechBubble";
import Letter from "../letter/letter"
import Fireplace from "../fireplace/FirePlace";
import Curtains from "../curtains/Curtains";
import Mirror from "../mirror/Mirror";
import ChalkOutline from "../chalkoutline/ChalkOutline";
import Door from "../door/Door";
import DinoCop from "../dino-cop/Dino";
import Jar from "../jar/Jar";
import Tooth from "../clues/Tooth";
import EnvelopeBasic from "./landing-room-images/Envelope.png";
import EnvelopeGlow from "./landing-room-images/EnvelopeGlow.png";
import Horn from "../clues/Horn";

const Envelope = (props) => {
  const [displayingLetter, showLetter] = useState(false);

  return(
    <div>
      <img className="envelopeOutline" onClick={() => showLetter(true)} src={EnvelopeBasic} alt="envelope" onMouseOver={e => e.currentTarget.src = EnvelopeGlow } onMouseOut={e => e.currentTarget.src = EnvelopeBasic }/>
      <Letter displayingLetter={displayingLetter} showLetter={showLetter}>
        {props.letterContent}
      </Letter>
    </div>
  );
};

const LetterOneContent = () => { 
  return(
    <div>
      <p>Dear Andy,</p>
      <p>This is letter one</p>
      <p>Wishing you the best,</p>
      <p>Tiffany</p>
    </div>
  );
};

const LandingRoom = () => {
  const [showDoor, setDoor] = useState(false);
  const [showMirror, setMirror] = useState(false);
  const [showEnvelopeOne, setEnvelopeOne] = useState(false);

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
        {showEnvelopeOne ? <Envelope id="envelope1" letterContent= {<LetterOneContent />} /> : null }        
        <Fireplace fireplaceMethod = {setEnvelopeOne}/>
        {showEnvelopeOne ? <Horn /> : null}

      </div>
    </div>
  );
};

export default LandingRoom;
