import React from "react";
import { useState } from 'react';
import Inventory from "../inventory/Inventory";
import Popup from "../popup/PopUp";
import SpeechBubbleReuse from "../speech-bubble/SpeechBubbleReuse";
import SpeechBubble from "../speech-bubble/SpeechBubble";
import RoomOneImage from "./landing-room-images/RoomOneImage.jpeg";
import DoorGlow from "./landing-room-images/DoorOrangeCropped.png";
import JarGlow from "./landing-room-images/JarCroppedFinal.png";
import DoorBasic from "./landing-room-images/CroppedDoorFinal.png";
import JarBasic from "./landing-room-images/CroppedJarFinal.png";
import Cop from "./landing-room-images/triceCOP.png";
import MirrorBasic from "./landing-room-images/basic-mirror.png";
import MirrorGlow from "./landing-room-images/highlighted-mirror.png";
import Fireplace from "../fireplace/FirePlace";
import Curtains from "../curtains/Curtains";
import ChalkOutline from "../chalkoutline/ChalkOutline";
import BloodyTooth from "./landing-room-images/BloodyTooth.png";

const Mirror = ({doorMethod}) => {
  const [showPopup, setButtonPopup] = useState(false);

  const mirrorClick = () =>{
    setButtonPopup(true);
    doorMethod(true);
  }


  return(
    <div>
      <img className="mirrorOutline" onClick={() => mirrorClick()} src={MirrorBasic} alt="Mirror" onMouseOver={e => e.currentTarget.src = MirrorGlow } onMouseOut={e => e.currentTarget.src = MirrorBasic }/>
      <Popup show={showPopup} setShow={setButtonPopup}>
        <div>
          <p>Placeholder text</p>
        </div>
      </Popup>
    </div>
  )
}

const Door = () => {
  const [showPopup, setButtonPopup] = useState(false);

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
      <Popup show={showPopup} setShow={setButtonPopup}>
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
  const [speechBubble, setSpeechbubble] = useState(false);

  const bubbleText = () => {
    return(
      "Hey, don't poke me bitch"
    )
  }

  return (
    <div>
      <img className="cop" src={Cop} alt="TriceraCop" onClick={() => setSpeechbubble(true)}/>
      <SpeechBubbleReuse display={speechBubble} showBubble={setSpeechbubble} words={bubbleText}>
      </SpeechBubbleReuse>
    </div>
  );
};

const Tooth = () => {
  
  return(
    <div>
      <img className = "tooth-small" src={BloodyTooth} alt="tooth image" id = 'tooth'  onMouseOver={e => e.currentTarget.className = 'tooth-large' }onMouseOut={e => e.currentTarget.className = 'tooth-small' } />
    </div>
  )
};

const Jar = ({mirrorMethod}) => {
  const [showPopup, setButtonPopup] = useState(false);
  const [speechBubble, setSpeechbubble] = useState(false);

  const bubbleText = () => {
    return(
      'Hmm, pointy...'
    )
  }

  const ClickHandler = () => {
    mirrorMethod(true);
    setButtonPopup(true);
    setSpeechbubble(true);
  };

  return(
    <div>
      <img className="jarOutline" onClick={() => ClickHandler()} src={JarBasic} alt="Jar" onMouseOver={e => e.currentTarget.src = JarGlow } onMouseOut={e => e.currentTarget.src = JarBasic }/>
      <Popup show={showPopup} setShow={setButtonPopup}>
        <div>
          <p>You notice a golden vase on the mantelpiece. Upon closer inspection, it seems that there is something inside. You shake it out and a blood-stained tooth falls on the floor. Curious? Check you inventory!</p>
        </div>
      </Popup>
      <SpeechBubbleReuse display={speechBubble} showBubble={setSpeechbubble} words={bubbleText}>
      </SpeechBubbleReuse>
    </div>
  )
}

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
