import CurtainsImage from "./curtain-images/Curtains.png";
import CurtainsGlow from "./curtain-images/CurtainsGlow.png";
import Popup from "../popup/PopUp";
import "./Curtains.css";
import React from "react";
import { useState } from 'react';

const Curtains = ({curtainsMethod}) => {
  const [showPopup, setButtonPopup] = useState(false);

  const curtainsClick = () => {
    curtainsMethod(true);
    setButtonPopup(true);
  };

  return(
    <div>
      <img className="curtainsobject" onClick={() => curtainsClick()} 
        src={CurtainsImage} alt="Curtains" 
        onMouseOver={e => e.currentTarget.src = CurtainsGlow } 
        onMouseOut={e => e.currentTarget.src = CurtainsImage }
      />
      <Popup show={showPopup} setShow={setButtonPopup}>
        <div>
          <p>Placeholder Text.</p>
        </div>
      </Popup>
    </div>
  )
};

export default Curtains