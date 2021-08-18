import React from "react";
import { useState } from 'react';
import RoomOneImage from "./landing-room-images/RoomOneChalk.png";
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
import Horn from "../clues/Horn";
import Footprint from "../clues/Footprint";
import EnvelopeOne from "../envelopes/EnvelopeOne";
import EnvelopeTwo from "../envelopes/EnvelopeTwo";
import LetterTwoContent from "../envelopes/LetterTwoContent";
import EnvelopeThree from "../envelopes/EnvelopeThree";
import EnvelopeFour from "../envelopes/EnvelopeFour";
import LetterFourContent from "../envelopes/LetterFourContent";
import EnvelopeFive from "../envelopes/EnvelopeFive";
import EnvelopeSix from "../envelopes/EnvelopeSix";
import EnvelopeSeven from "../envelopes/EnvelopeSeven";

const LandingRoom = () => {
  const [showEnvelopeOne, setEnvelopeOne] = useState(false);
  const [noteTwoAndJar, setNoteTwoAndJar] = useState(false);
  const [showEnvelopeThree, setEnvelopeThree] = useState(false);
  const [noteFourAndMirror, setNoteFourAndMirror] = useState(false);
  const [showEnvelopeFive, setEnvelopeFive] = useState(false); 
  const [noteSix, setNoteSix] = useState(false);
  const [showCurtains, setCurtains] = useState(false);
  const [showNoteSevenAndFootprint, setNoteSevenAndFootprint] = useState(false);
  const [showChalkOutline, setChalkOutline] = useState(false);
  const [showDoor, setShowDoor] = useState(false);

  return (
    <div className="LandingRoom">
      <div className="parent">
        <img className="backgroundImage" src={RoomOneImage} alt="TriceraCop" />
        <Fireplace fireplaceMethod = {setEnvelopeOne}/>
        { showEnvelopeOne ? <EnvelopeOne letterTwo = {setNoteTwoAndJar} /> : null } 
        { showEnvelopeOne ? <Horn /> : null}
        { noteTwoAndJar ? <EnvelopeTwo letterContent = {<LetterTwoContent/>} /> : null }
        { noteTwoAndJar ? <Jar jarMethod = {setEnvelopeThree}/> : null }
        { showEnvelopeThree ? <Tooth /> : null}
        { showEnvelopeThree ? <EnvelopeThree letterFour = {setNoteFourAndMirror}/> : null }
        { noteFourAndMirror ? <EnvelopeFour letterContent = {<LetterFourContent/>} /> : null }
        { noteFourAndMirror ? <Mirror mirrorMethod = {setEnvelopeFive}/> : null}
        { showEnvelopeFive ? <EnvelopeFive letterSix = {setNoteSix} /> : null }
        { noteSix ? <EnvelopeSix showCurtains = {setCurtains} /> : null }
        { showCurtains ? <Curtains curtainMethod = {setNoteSevenAndFootprint} /> : null }
        { showNoteSevenAndFootprint ? <Footprint/> : null }
        { showNoteSevenAndFootprint ? <EnvelopeSeven showOutline = {setChalkOutline}/> : null }
        { showChalkOutline ? <ChalkOutline showDoor = {setShowDoor} /> : null }
        { showDoor ? <Door /> : null }
        <DinoCop />
        <SpeechBubble />
        <SpeechBubbleReuse />       
      </div>
    </div>
  );
};

export default LandingRoom;
