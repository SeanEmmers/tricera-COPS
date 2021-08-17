import React from "react";
import HornImage from "./clue-images/Horn.png";
import "./clues.css";

const Horn = () => {
  
  return(
    <div>
      <img
        className = "horn-small" 
        src={HornImage} alt="horn image" 
        id = 'horn'  
        onMouseOver={e => e.currentTarget.className = 'horn-large' }
        onMouseOut={e => e.currentTarget.className = 'horn-small' } 
      />
    </div>
  )
};

export default Horn;