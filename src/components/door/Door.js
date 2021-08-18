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
          <p> Congratulations, you caught the killer and saved Dinoville !! </p>
          <p> Thank you for playing! </p>
          <button> Play again? </button>
        </div>
      </Popup>
    </div>
  );
}

export default Door;