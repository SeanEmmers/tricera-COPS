import React from 'react'
import BloodyTooth from "./room-one-images/Tooth.png"
import "./item-images.css"

class Tooth extends React.Component {
  constructor(props) {
    super(props);
    this.state = {hovered: false};
  }

  render() {
    return (
      <div>
      <img className ='tooth-image' src ={BloodyTooth} />
      </div>
    );
  }
}
  

export default Tooth