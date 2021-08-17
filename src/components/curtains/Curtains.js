import CurtainsImage from "../landing-room/landing-room-images/Curtains.png";
import CurtainsGlow from "../landing-room/landing-room-images/CurtainsGlow.png";
import Popup from "../popup/PopUp";
import "./Curtains.css";
import React from "react";
import { useState } from 'react';

const Curtains = ({curtainsMethod}) => {
  const [buttonPopUp, setButtonPopup] = useState(false);

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
      <Popup trigger={buttonPopUp} setTrigger={setButtonPopup}>
        <div>
          <p>Placeholder Text.</p>
        </div>
      </Popup>
    </div>
  )
};

export default Curtains