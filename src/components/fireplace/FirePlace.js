import FireplaceImage from "../landing-room/landing-room-images/FirePlace.png";
import FireplaceGlow from "../landing-room/landing-room-images/FirePlaceGlow.png";
import Popup from "../popup/PopUp";
import "./FirePlace.css";
import React from "react";
import { useState } from 'react';

const Fireplace = ({fireplaceMethod}) => {
  const [buttonPopUp, setButtonPopup] = useState(false);

  const fireplaceClick = () => {
    fireplaceMethod(true);
    setButtonPopup(true);
  };

  return(
    <div>
      <img className="fireplaceobject" onClick={() => fireplaceClick()} src={FireplaceImage} alt="Fireplace" onMouseOver={e => e.currentTarget.src = FireplaceGlow } onMouseOut={e => e.currentTarget.src = FireplaceImage }/>
      <Popup trigger={buttonPopUp} setTrigger={setButtonPopup}>
        <div>
          <p>Place Holder Text.</p>
        </div>
      </Popup>
    </div>
  )
};

export default Fireplace