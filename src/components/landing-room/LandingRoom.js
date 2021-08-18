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
import EnvelopeOne from "../envelopes/EnvelopeOne";
import EnvelopeTwo from "../envelopes/EnvelopeTwo";
import LetterTwoContent from "../envelopes/LetterTwoContent";
import EnvelopeThree from "../envelopes/EnvelopeThree";
import EnvelopeFour from "../envelopes/EnvelopeFour";
import LetterFourContent from "../envelopes/LetterFourContent";
import EnvelopeFive from "../envelopes/EnvelopeFive";
import LetterSixContent from "../envelopes/LetterSixContent";
import EnvelopeSix from "../envelopes/EnvelopeSix";

const LandingRoom = () => {
  const [showEnvelopeOne, setEnvelopeOne] = useState(false);
  const [noteTwoAndJar, setNoteTwoAndJar] = useState(false);
  const [showEnvelopeThree, setEnvelopeThree] = useState(false);
  const [noteFourAndMirror, setNoteFourAndMirror] = useState(false);
  const [showEnvelopeFive, setEnvelopeFive] = useState(false); 
  const [noteSixAndCurtain, setNoteSixAndCurtain] = useState(false);
  const [showChalkOutline, setChalkOutline] = useState(false);

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
        { showEnvelopeFive ? <EnvelopeFive letterSix = {setNoteSixAndCurtain} /> : null }
        { noteSixAndCurtain ? <EnvelopeSix letterContent = {<LetterSixContent/>} /> : null }
        { noteSixAndCurtain ? <Curtains curtainMethod = {setChalkOutline} /> : null }
        { showChalkOutline ? <ChalkOutline/> : null }
        { noteSixAndCurtain ? <Door /> : null }
        <DinoCop />
        <SpeechBubble />
        <SpeechBubbleReuse />       
      </div>
    </div>
  );
};

export default LandingRoom;

// const LetterOneSpeechBubble = () => {
//   const [speechBubble, setSpeechbubble] = useState(true);

//   const bubbleText = () => {
//     return(
//       "Hey look a letter, you should read it..."
//     )
//   }
//   return(
//     <div>
//        <SpeechBubbleReuse display={speechBubble} showBubble={setSpeechbubble} words={bubbleText}>
//       </SpeechBubbleReuse>
//     </div>
//   )
// }
