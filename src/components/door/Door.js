import React from "react";
import { useState } from 'react';
import LosingPopup from "../popup/LosingPopUp";
import DoorGlow from "./door-images/DoorOrangeCropped.png";
import DoorBasic from "./door-images/CroppedDoorFinal.png";
import "./Door.css";
import { Link } from 'react-router-dom'

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
      <LosingPopup show={showPopup} setShow={setButtonPopup}>
        <div className="EndingText">
          <p> Congratulations, you caught the killer and saved Dinoville !! </p>
          <p> Thank you for playing! </p>
            <Link to = '/about'>
            <button> About us :) </button>
            </Link>
        </div>
      </LosingPopup>
    </div>
  );
}

export default Door;