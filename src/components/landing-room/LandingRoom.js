import React from "react";

class EndingText extends React.Component {
  render() {
    return (
      <p className='EndingText'>
        {this.props.message}
      </p>
    )
  }
}

const LandingRoom = () => {
  return (
    <div className='LandingRoom'>
      <p>Welcome to the Dino mystery!</p> 
      <form>
        <button OnClick = {EndingText.props.message = 'You win'}>T-rex is the killer?</button> 
        <button>Asteroid is the killer?</button>
      </form>
      <EndingText />
    </div>
  )
}

export default LandingRoom;
