import ChalkOutlineImage from "./chalkoutline-images/ChalkOutline.png";
import ChalkOutlineGlow from ".//chalkoutline-images/ChalkOutlineGlow.png";
import Popup from "../popup/PopUp";
import "./ChalkOutline.css";
import React from "react";
import { useState } from 'react';

const ChalkOutline = ({showDoor}) => {
  const [showPopup, setButtonPopup] = useState(false);

  const chalkoutlineClick = () => {
    setButtonPopup(true);
  };

  const winningClick = () => {
    showDoor(true);
    window.alert('You win!!')
  }

  const losingClick = () => {
    window.alert("You lose, try again!")
  }

  return(
    <div>
      <img className="chalkoutlineobject" onClick={() => chalkoutlineClick()} 
        src={ChalkOutlineImage} alt="Chalk Outline" 
        onMouseOver={e => e.currentTarget.src = ChalkOutlineGlow } 
        onMouseOut={e => e.currentTarget.src = ChalkOutlineImage }
      />
      <Popup show={showPopup} setShow={setButtonPopup}>
        <div>
          <p>So who is the killer?</p>
          <div className="EndingText">
         
          <button
            className="popup-btn"
            onClick={() => losingClick()}
          >
            Tiffany is the killer?
          </button>
          <button
            className="popup-btn"
            onClick={() => losingClick()}
          >
            Andy is the killer?
          </button>
          <button
            className="popup-btn"
            onClick={() => winningClick()}
          >
            Tricera-cop is the killer?
          </button>
        </div>
        </div>
      </Popup>
    </div>
  )
};

export default ChalkOutline;
