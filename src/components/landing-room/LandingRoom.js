import React from "react";
import RoomOneImage from "./room-one-images/RoomOneImage.jpeg";
import OrangeDoor from "./room-one-images/orange-door.png";
import Popup from "./PopUp";
import { useState } from 'react';

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
        <div className="bubble-inner">
          <button className="small-btn" onClick={this.updateContent}>...</button>
          <div className="pointer"></div>
        </div>
      </div>
    )
  }
}

const Door = () => {
  const [buttonPopUp, setButtonPopup] = useState(false);

  return(
    <div>
      <button onClick={() => setButtonPopup(true)}> <img class="Door" src={OrangeDoor} alt="OrageDoor" /></button>
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
      <div class="container">
        <img class="backgroundImage" src={RoomOneImage} alt="TriceraCop" />
      </div>
      <Door/>
      <SpeechBubble/>
    </div>
  )
}

// class EndingText extends React.Component {

//   onButtonClickHandler = (props) => {
//     window.alert(props)
//   }

//   render(){ 
//     return(<div className="EndingText">
//       <button onClick={() => this.onButtonClickHandler('You win!!')}>T-Rex is the killer?</button>
//       <button onClick={() => this.onButtonClickHandler('You lose!!')}>Asteroid is the killer?</button>
//     </div>);
//   }
// };

export default LandingRoom;
