import FireplaceImage from "./fireplace-images/FirePlace.png";
import FireplaceGlow from "./fireplace-images/FirePlaceGlow.png";
import Popup from "../popup/PopUp";
import "./FirePlace.css";
import React from "react";
import { useState } from 'react';

const Fireplace = ({fireplaceMethod}) => {
  const [showPopup, setButtonPopup] = useState(false);

  const fireplaceClick = () => {
    fireplaceMethod(true);
    setButtonPopup(true);
  };

  return(
    <div>
      <img className="fireplaceobject" onClick={() => fireplaceClick()} 
        src={FireplaceImage} alt="Fireplace" 
        onMouseOver={e => e.currentTarget.src = FireplaceGlow } 
        onMouseOut={e => e.currentTarget.src = FireplaceImage }
      />
      <Popup show={showPopup} setShow={setButtonPopup}>
        <div>
          <p>Place Holder Text.</p>
        </div>
      </Popup>
    </div>
  )
};

export default Fireplace;