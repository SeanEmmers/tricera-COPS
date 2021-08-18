import React from "react";
import AndyImg from "./images/Andy.png";
import "./suspects.css";
import Popup from "../popup/PopUp";
import { useState } from 'react';

const Andy = () => {
  const [showPopup, setButtonPopup] = useState(false);

  const clickHandler = () => {
    setButtonPopup(true);
  }

  return (
    <div>
      <img className="andy" src={AndyImg} alt="Andy" onClick = {() => clickHandler()}/>
      <Popup show={showPopup} setShow={setButtonPopup}>
        <div>
          <p>You were wrong, the real killer got away !! </p>
        </div>
      </Popup>
    </div>
  );
};

export default Andy;
