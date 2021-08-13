import React from "react";
import RoomOneImage from "./room-one-images/RoomOneImage.jpeg";
import OrangeDoor from "./room-one-images/DoorOrangeCropped.png";
import Popup from "./PopUp";
import { useState } from 'react';
import JarCropped from "./room-one-images/jar-cropped.jpeg";
import DoorImg from "./room-one-images/CroppedDoorFinal.png";
import JarBasic from "./room-one-images/CroppedJarFinal.png";

class SpeechBubble extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        message: "Hello, I am Tricera-cop"
    }
  }
  
  updateContent = () => {
    this.setState({ message: "We are locked in here, I need your help to escape and catch the killer!"});
  }

  render() {
    return(
      <div className="bubble">{this.state.message}
          <br/>
          <button className="small-btn" onClick={this.updateContent}>Next...</button>
          <div className="pointer"></div>
      </div>
    )
  }
}

const Jar = () => {

  return(
    <img className="jarOutline" src={JarBasic} alt="Jar" onMouseOver={e => e.currentTarget.src = JarCropped } onMouseOut={e => e.currentTarget.src = JarBasic }/>
  )
}

const Door = () => {
  const [buttonPopUp, setButtonPopup] = useState(false);

  return(
    <div>
     <img className="doorOutline" onClick={() => setButtonPopup(true)} src={DoorImg}>
      </img>
      <Popup trigger={buttonPopUp} setTrigger={setButtonPopup}>
        <div className="EndingText">
          <button className="popup-btn" onClick={() => window.alert('You win!!')}>T-Rex is the killer?</button>
          <button className="popup-btn" onClick={() => window.alert('You lose!!')}>Asteroid is the killer?</button>
        </div>
      </Popup>
    </div>
    )
}

const LandingRoom = () => {
  return (
    <div className='LandingRoom'>
      <div className="parent">
        <img className="backgroundImage" src={RoomOneImage} alt="TriceraCop" />
        <Jar/>
        <Door/>
        <SpeechBubble/>
      </div>
    </div>
  );
}

export default LandingRoom;
