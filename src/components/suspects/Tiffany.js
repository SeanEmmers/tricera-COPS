import React from "react";
import { useState } from 'react';
import TiffanyImg from "./images/Tiffany.png";
import LosingPopup from "../popup/LosingPopUp";
import "./suspects.css";
import { Button } from "react-bootstrap";

const Tiffany = () => {
  const [showPopup, setButtonPopup] = useState(false);

  const clickHandler = () => {
    setButtonPopup(true);
  }

  const startOver = () => {
    window.location.reload(false);
  }

  return (
    <div>
      <img className="tiffany" src={TiffanyImg} alt="tiffany" onClick = {() => clickHandler()}/>
      <LosingPopup show={showPopup} setShow={setButtonPopup}>
        <div>
        <p>You were wrong, the real killer got away! </p>
        <Button onClick = {() => startOver()}> Start again? </Button>
        </div>
      </LosingPopup>
    </div>
  );
};

export default Tiffany;