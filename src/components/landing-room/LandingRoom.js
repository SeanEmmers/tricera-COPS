import React from "react";
import { useState } from 'react';
import { Button } from "react-bootstrap";
import Inventory from "../inventory/Inventory";
import Popup from "../popup/PopUp";
import Letter from "../letter/letter"
import SpeechBubble from "../speech-bubble/SpeechBubble";
import RoomOneImage from "./landing-room-images/RoomOneImage.jpeg";
import DoorGlow from "./landing-room-images/DoorOrangeCropped.png";
import JarGlow from "./landing-room-images/JarCroppedFinal.png";
import DoorBasic from "./landing-room-images/CroppedDoorFinal.png";
import JarBasic from "./landing-room-images/CroppedJarFinal.png";
import Cop from "./landing-room-images/triceCOP.png";
import MirrorBasic from "./landing-room-images/basic-mirror.png";
import MirrorGlow from "./landing-room-images/highlighted-mirror.png";
import EnvelopeBasic from "./landing-room-images/Envelope.png";
import EnvelopeGlow from "./landing-room-images/EnvelopeGlow.png";
import BloodyTooth from "./landing-room-images/BloodyTooth.png";
import { props } from "bluebird";

const Mirror = () => {
  const [buttonPopUp, setButtonPopup] = useState(false);

  return(
    <div>
      <img className="mirrorOutline" onClick={() => setButtonPopup(true)} src={MirrorBasic} alt="Mirror" onMouseOver={e => e.currentTarget.src = MirrorGlow } onMouseOut={e => e.currentTarget.src = MirrorBasic }/>
      <Popup trigger={buttonPopUp} setTrigger={setButtonPopup}>
        <div>
          <p>Placeholder text</p>
        </div>
      </Popup>
    </div>
  )
}

const Door = () => {
  const [buttonPopUp, setButtonPopup] = useState(false);

  return (
    <div>
      <img
        className="doorOutline"
        onClick={() => setButtonPopup(true)}
        src={DoorBasic}
        onMouseOver={(e) => (e.currentTarget.src = DoorGlow)}
        onMouseOut={(e) => (e.currentTarget.src = DoorBasic)}
        alt="OrangeDoor"
      />
      <Popup trigger={buttonPopUp} setTrigger={setButtonPopup}>
        <div className="EndingText">
         
          <button
            className="popup-btn"
            onClick={() => window.alert("You win!!")}
          >
            T-Rex is the killer?
          </button>
          <button
            className="popup-btn"
            onClick={() => window.alert("You lose!!")}
          >
            Asteroid is the killer?
          </button>
        </div>
      </Popup>
    </div>
  );
}

const DinoCop = () => {
  return (
    <img className="cop" src={Cop} alt="TriceraCop" />
  );
};

const Tooth = () => {
  
  return(
    <div>
      <img className = "tooth-small" src={BloodyTooth} alt="tooth image" id = 'tooth'  onMouseOver={e => e.currentTarget.className = 'tooth-large' }onMouseOut={e => e.currentTarget.className = 'tooth-small' } />
    </div>
  )
};

const Jar = ({doorMethod}) => {
  const [buttonPopUp, setButtonPopup] = useState(false);

  const ClickHandler = () => {
    doorMethod(true);
    setButtonPopup(true);
  };

  return(
    <div>
      <img className="jarOutline" onClick={() => ClickHandler()} src={JarBasic} alt="Jar" onMouseOver={e => e.currentTarget.src = JarGlow } onMouseOut={e => e.currentTarget.src = JarBasic }/>
      <Popup trigger={buttonPopUp} setTrigger={setButtonPopup}>
        <div>
          <p>You notice a golden vase on the mantelpiece. Upon closer inspection, it seems that there is something inside. You shake it out and a blood-stained tooth falls on the floor. Curious? Check you inventory!</p>
        </div>
      </Popup>
    </div>
  )
};

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
  const [show, setShow] = useState(false)

  return (
    <div className="LandingRoom">
      <div className="parent">
        <img className="backgroundImage" src={RoomOneImage} alt="TriceraCop" />
        <DinoCop />
        <Door />
        <Jar doorMethod = {setShow}/>
        {show? <Tooth /> : null}
        <SpeechBubble />
        <Mirror />
        <Inventory />
        <Envelope id="envelope1" letterContent= {<LetterOneContent />} />
      </div>
    </div>
  );
};

export default LandingRoom;
