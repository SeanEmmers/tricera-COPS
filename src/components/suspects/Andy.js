import React from "react";
import AndyImg from "./images/Andy.png";
import "./suspects.css";
import LosingPopup from "../popup/LosingPopUp";
import { useState } from 'react';

const Andy = () => {
  const [showPopup, setButtonPopup] = useState(false);

  const clickHandler = () => {
    setButtonPopup(true);
  }

  const startOver = () => {
    window.location.reload(false);
  }

  return (
    <div>
      <img className="andy" src={AndyImg} alt="Andy" onClick = {() => clickHandler()}/>
      <LosingPopup show={showPopup} setShow={setButtonPopup}>
        <div>
          <p>You were wrong, the real killer got away !! </p>
          <button onClick = {() => startOver()}> Start again? </button>
        </div>
      </LosingPopup>
    </div>
  );
};

export default Andy;
