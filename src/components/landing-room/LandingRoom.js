import React from "react";
import RoomOneImage from "./room-one-images/RoomOneImage.jpeg";

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
      <div>
        <div className="bubble">{this.state.message}
        <button onClick={this.updateContent}>
          Next...
        </button>
        </div>
        <div class="pointer"></div>
      </div>
    )
  }
}

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
    <div className='LandingRoom'>
      <EndingText />
      <div class="container">
        <img class="backgroundImage" src={RoomOneImage} alt="TriceraCop" />
      </div>
      <SpeechBubble/>
    </div>
  )
}

export default LandingRoom;
