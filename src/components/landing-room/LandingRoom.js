import React from "react";
import RoomOneImage from "./room-one-images/RoomOneImage.jpeg";

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
    <div className='LandingRoom' data-testid='landingroom-1'>
      <p>Welcome to the Dino mystery!</p>
      <EndingText />
      <div className="container">
      <img src={RoomOneImage} alt="Landing room"  height="90%" width="80%"  ></img>
    </div>
    </div>
  )
}

export default LandingRoom;
