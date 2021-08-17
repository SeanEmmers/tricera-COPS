import React from "react";
import BloodyTooth from "./clue-images/BloodyTooth.png";
import "./clues.css";

const Tooth = () => {
  
  return(
    <div>
      <img className = "tooth-small" src={BloodyTooth} alt="tooth image" id = 'tooth'  onMouseOver={e => e.currentTarget.className = 'tooth-large' }onMouseOut={e => e.currentTarget.className = 'tooth-small' } />
    </div>
  )
};

export default Tooth;