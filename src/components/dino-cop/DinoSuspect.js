import React from "react";
import { useState } from 'react';
import DinoImg from "./dino-images/triceCOP.png";
import "./Dino.css";
import Popup from "../popup/PopUp";

const DinoSuspect = (props) => {
  const [showPopup, setButtonPopup] = useState(false);

  const clickHandler = () => {
    setButtonPopup(true);
    props.showSuspects(false);
    props.showDoor(true);
    props.showKey(true);
   
  }

  return (
    <div>
      <img className="cop-suspect" src={DinoImg} alt="Dino-cop" onClick = {() => clickHandler()} />
      <Popup show={showPopup} setShow={setButtonPopup}>
        <div>
          <p>Congratulations, you caught the killer and recieved a key !! </p>
        </div>
      </Popup>
    </div>
  );
};

export default DinoSuspect;