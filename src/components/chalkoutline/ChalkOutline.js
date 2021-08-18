import ChalkOutlineImage from "./chalkoutline-images/ChalkOutline.png";
import ChalkOutlineGlow from ".//chalkoutline-images/ChalkOutlineGlow.png";
import Popup from "../popup/PopUp";
import "./ChalkOutline.css";
import React from "react";
import { useState } from 'react';

const ChalkOutline = ({showDoor}) => {
  const [buttonPopUp, setButtonPopup] = useState(false);

  const chalkoutlineClick = () => {
    chalkoutlineMethod(true);
    setButtonPopup(true);
  };

  return(
    <div>
      <img className="chalkoutlineobject" onClick={() => chalkoutlineClick()} 
        src={ChalkOutlineImage} alt="Chalk Outline" 
        onMouseOver={e => e.currentTarget.src = ChalkOutlineGlow } 
        onMouseOut={e => e.currentTarget.src = ChalkOutlineImage }
      />
      <Popup trigger={buttonPopUp} setTrigger={setButtonPopup}>
        <div>
          <p>Placeholder Text.</p>
        </div>
      </Popup>
    </div>
  )
};

export default ChalkOutline;
