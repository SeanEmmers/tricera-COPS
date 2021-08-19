import ChalkOutlineImage from "./chalkoutline-images/ChalkOutline.png";
import ChalkOutlineGlow from ".//chalkoutline-images/ChalkOutlineGlow.png";
import "./ChalkOutline.css";
import React from "react";
import Popup from "../popup/PopUp";
import { useState } from 'react';

const ChalkOutline = (props) => {
  const [showPopup, setButtonPopup] = useState(false);

  const chalkoutlineClick = () => {
    props.showSuspects(true);
    props.showDinoSuspect(true);
    setButtonPopup(true);
  };

  return(
    <div>
      <img className="chalkoutlineobject" onClick={() => chalkoutlineClick()} 
        src={ChalkOutlineImage} alt="Chalk Outline" 
        onMouseOver={e => e.currentTarget.src = ChalkOutlineGlow } 
        onMouseOut={e => e.currentTarget.src = ChalkOutlineImage }
      />
       <Popup show={showPopup} setShow={setButtonPopup}>
        <div>
          <p>Decide who you think the killer is. Click on your choice.</p>
        </div>
      </Popup>
    </div>
  )
};

export default ChalkOutline;
