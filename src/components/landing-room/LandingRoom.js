import React from "react";
import RoomOneImage from "./room-one-images/RoomOneImage.jpeg";
import jarOutline from "./room-one-images/jarOutline.png";

class EndingText extends React.Component {

  onButtonClickHandler = (props) => {
    window.alert(props)
  }

  render(){ 
    return(<div className="EndingText">
      <button onClick={() => this.onButtonClickHandler('You win!!')}>T-Rex is the killer?</button>
      <button onClick={() => this.onButtonClickHandler('You lose!!')}>Asteroid is the killer?</button>
    </div>);
  }
};

const LandingRoom = () => {
  return (
    <div className="LandingRoom">
      <p>Welcome to the Dino mystery!</p>
      <EndingText />
      <div className="parent">
        <img className="backgroundImage" src={RoomOneImage} alt=" TriceraCop"></img>
        <img className="ObjectOutline" id="OrangeLine" src={jarOutline} alt="Jar"></img>
      </div> 
    </div>
  );
}

export default LandingRoom;
