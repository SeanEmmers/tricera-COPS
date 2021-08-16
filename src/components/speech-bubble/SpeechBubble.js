import React from "react";
import { Button } from "react-bootstrap";
import "./SpeechBubble.css";

class SpeechBubble extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
      message: "Hello, I am Tricera-cop",
     
    };
  }

  updateContent = () => {
    this.setState({
      message:
        "We are locked in here, I need your help to escape and catch the killer!",
    });
  };

  render() {
    return (
      <div className="bubble">
        {this.state.message}
        <br />
        <div className="pointer"></div>

        <div className="small-btn">
          <Button
            size="sm"
            variant="outline-secondary"
            onClick={this.updateContent}
          >
            Next...
          </Button>
        </div>
      </div>
    );
  }
}

export default SpeechBubble;
