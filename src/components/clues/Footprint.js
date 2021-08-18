import React from "react";
import FootPrints from "./clue-images/FootPrint.png";
import "./clues.css";

const Footprint = () => {
  
  return(
    <div>
      <img className = "footprint-small" src={FootPrints} alt="footprint" id = 'footprint'  onMouseOver={e => e.currentTarget.className = 'footprint-large' }onMouseOut={e => e.currentTarget.className = 'footprint-small' } />
    </div>
  )
};

export default Footprint;