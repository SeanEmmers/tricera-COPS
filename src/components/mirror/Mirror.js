import React from "react";
import { useState } from 'react';
import Popup from "../popup/PopUp";
import MirrorBasic from "./mirror-images/basic-mirror.png";
import MirrorGlow from "./mirror-images/highlighted-mirror.png";
import "./Mirror.css";

const Mirror = ({doorMethod}) => {
  const [showPopup, setButtonPopup] = useState(false);

  const mirrorClick = () =>{
    setButtonPopup(true);
    doorMethod(true);
  }


  return(
    <div>
      <img className="mirrorOutline" onClick={() => mirrorClick()} src={MirrorBasic} alt="Mirror" onMouseOver={e => e.currentTarget.src = MirrorGlow } onMouseOut={e => e.currentTarget.src = MirrorBasic }/>
      <Popup show={showPopup} setShow={setButtonPopup}>
        <div>
          <p>Placeholder text</p>
        </div>
      </Popup>
    </div>
  )
}

export default Mirror;