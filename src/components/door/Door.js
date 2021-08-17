import React from "react";
import { useState } from 'react';
import Popup from "../popup/PopUp";
import DoorGlow from "./door-images/DoorOrangeCropped.png";
import DoorBasic from "./door-images/CroppedDoorFinal.png";
import "./Door.css";

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

export default Door;