import React from "react";
import KeyImg from "./clue-images/KeyImg.png";
import "./clues.css";

const Key = () => {
  
  return(
    <div>
      <img className = "key-small" src={KeyImg} alt="Key image" id = 'key'  onMouseOver={e => e.currentTarget.className = 'key-large' }onMouseOut={e => e.currentTarget.className = 'key-small' } />
    </div>
  )
};

export default Key;