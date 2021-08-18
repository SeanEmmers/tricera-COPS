import React from "react";
import { useState } from 'react';
import TiffanyImg from "./images/Tiffany.png";
import Popup from "../popup/PopUp";
import "./suspects.css";

const Tiffany = () => {
  const [showPopup, setButtonPopup] = useState(false);

  const clickHandler = () => {
    setButtonPopup(true);
  }


  return (
    <div>
      <img className="tiffany" src={TiffanyImg} alt="tiffany" onClick = {() => clickHandler()}/>
      <Popup show={showPopup} setShow={setButtonPopup}>
        <div>
          <p>You were wrong, the real killer got away !! </p>
        </div>
      </Popup>
    </div>
  );
};

export default Tiffany;