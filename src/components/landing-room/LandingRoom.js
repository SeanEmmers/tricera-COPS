import React from "react";
import { useState } from 'react';
import RoomOneImage from "./landing-room-images/RoomOneImage.jpeg";
import SpeechBubbleReuse from "../speech-bubble/SpeechBubbleReuse";
import SpeechBubble from "../speech-bubble/SpeechBubble";
import Letter from "../letter/letter";
import Fireplace from "../fireplace/FirePlace";
import Curtains from "../curtains/Curtains";
import Mirror from "../mirror/Mirror";
import ChalkOutline from "../chalkoutline/ChalkOutline";
import Door from "../door/Door";
import DinoCop from "../dino-cop/Dino";
import Jar from "../jar/Jar";
import Tooth from "../clues/Tooth";
import EnvelopeBasic from "./landing-room-images/Envelope.png";
import EnvelopeGlow from "./landing-room-images/EnvelopeGlow.png";
import Horn from "../clues/Horn";

const EnvelopeOne = ({letterTwo}) => {
  const [displayingLetter, showLetter] = useState(false);
  const [speechBubble, setSpeechbubble] = useState(false);

  const bubbleText = () => {
    return(
      "We have two main suspects, Andy & Tiffany... There is another letter there, read it."
    )
  }

  const letterContent = () => {
    return(
      <div>
        <p>Dear Andy,</p>
        <p>This is letter one</p>
        <p>Wishing you the best,</p>
        <p>Tiffany</p>
      </div>
    );
  }

  const clickHandler = () => {
    showLetter(true);
    setSpeechbubble(true);
    letterTwo(true);

  }

  return(
    <div>
      <img className="envelopeOutline" onClick={() => clickHandler()} src={EnvelopeBasic} alt="envelope" onMouseOver={e => e.currentTarget.src = EnvelopeGlow } onMouseOut={e => e.currentTarget.src = EnvelopeBasic }/>
      <Letter displayingLetter={displayingLetter} showLetter={showLetter}>
        {letterContent()}
      </Letter>
      <SpeechBubbleReuse display={speechBubble} showBubble={setSpeechbubble} words={bubbleText}>
      </SpeechBubbleReuse>
    </div>
  );
};

const LetterTwoContent = () => { 

  return(
    <div>
      <p>Dear Diary,</p>
      <p>Tiffany smells</p>
      <p>Want divorse</p>
      <p>Andy</p>
    </div>
  );
};

const EnvelopeTwo = (props) => {
  const [displayingLetter, showLetter] = useState(false);
  const [speechBubble, setSpeechbubble] = useState(false);

  const bubbleText = () => {
    return(
      "Very interesting, we should check elsewhere in the room."
    )
  }

  const clickHandler = () => {
    showLetter(true);
    setSpeechbubble(true);
  }

  return(
    <div>
      <img className="envelopeOutline" onClick={() => clickHandler()} src={EnvelopeBasic} alt="envelope" onMouseOver={e => e.currentTarget.src = EnvelopeGlow } onMouseOut={e => e.currentTarget.src = EnvelopeBasic }/>
      <Letter displayingLetter={displayingLetter} showLetter={showLetter}>
        {props.letterContent}
      </Letter>
      <SpeechBubbleReuse display={speechBubble} showBubble={setSpeechbubble} words={bubbleText}>
      </SpeechBubbleReuse>
    </div>
  );
}

const EnvelopeThree = ({letterFour}) => {
  const [displayingLetter, showLetter] = useState(false);
  const [speechBubble, setSpeechbubble] = useState(false);

  const bubbleText = () => {
    return(
      "Me and Priya are buds, I don't trust Tiffany, she eats vegetables. Hey look, another letter."
    )
  }

  const letterContent = () => {
    return(
      <div>
        <p>Dear Tricera-cop,</p>
        <p>You are the only one I can trust</p>
        <p>pls help,</p>
        <p>Priya</p>
      </div>
    );
  }

  const clickHandler = () => {
    showLetter(true);
    setSpeechbubble(true);
    letterFour(true);

  }

  return(
    <div>
      <img className="envelopeOutline" onClick={() => clickHandler()} src={EnvelopeBasic} alt="envelope" onMouseOver={e => e.currentTarget.src = EnvelopeGlow } onMouseOut={e => e.currentTarget.src = EnvelopeBasic }/>
      <Letter displayingLetter={displayingLetter} showLetter={showLetter}>
        {letterContent()}
      </Letter>
      <SpeechBubbleReuse display={speechBubble} showBubble={setSpeechbubble} words={bubbleText}>
      </SpeechBubbleReuse>
    </div>
  );
};

const LetterFourContent = () => { 

  return(
    <div>
      <p>Yo Priya,</p>
      <p>You owe me 69 dino bucks</p>
      <p>give me now or else</p>
      <p>Tiffany x</p>
    </div>
  );
};

const EnvelopeFour = (props) => {
  const [displayingLetter, showLetter] = useState(false);
  const [speechBubble, setSpeechbubble] = useState(false);

  const bubbleText = () => {
    return(
      "It seems like Tiffany and Priya were arguing about money, I knew not to trust that cabbage muncher! We should search for more clues"
    )
  }

  const clickHandler = () => {
    showLetter(true);
    setSpeechbubble(true);
  }

  return(
    <div>
      <img className="envelopeOutline" onClick={() => clickHandler()} src={EnvelopeBasic} alt="envelope" onMouseOver={e => e.currentTarget.src = EnvelopeGlow } onMouseOut={e => e.currentTarget.src = EnvelopeBasic }/>
      <Letter displayingLetter={displayingLetter} showLetter={showLetter}>
        {props.letterContent}
      </Letter>
      <SpeechBubbleReuse display={speechBubble} showBubble={setSpeechbubble} words={bubbleText}>
      </SpeechBubbleReuse>
    </div>
  );
}

const EnvelopeFive = ({letterSix}) => {
  const [displayingLetter, showLetter] = useState(false);
  const [speechBubble, setSpeechbubble] = useState(false);

  const bubbleText = () => {
    return(
      "Think nothing of that, Andy was always jealous of Priya, he is a violent hateful dinoman. It looks like there is one more letter..."
    )
  }

  const letterContent = () => {
    return(
      <div>
        <p>Dear Tiffany,</p>
        <p>Please help me,</p>
        <p>I have a suspicion that Priya is cheating on me</p>
        <p>I think I know who the slimy croc is too,</p>
        <p>She always liked a man in uniform</p>
        <p>Andy</p>
      </div>
    );
  }

  const clickHandler = () => {
    showLetter(true);
    setSpeechbubble(true);
    letterSix(true);

  }

  return(
    <div>
      <img className="envelopeOutline" onClick={() => clickHandler()} src={EnvelopeBasic} alt="envelope" onMouseOver={e => e.currentTarget.src = EnvelopeGlow } onMouseOut={e => e.currentTarget.src = EnvelopeBasic }/>
      <Letter displayingLetter={displayingLetter} showLetter={showLetter}>
        {letterContent()}
      </Letter>
      <SpeechBubbleReuse display={speechBubble} showBubble={setSpeechbubble} words={bubbleText}>
      </SpeechBubbleReuse>
    </div>
  );
};

const LetterSixContent = () => { 

  return(
    <div>
      <p>Hello sexy dinoboy,</p>
      <p>I love your hat</p>
      <p>pls cum and put me in cuffs ;) </p>
      <p>Priya xoxox</p>
    </div>
  );
};

const EnvelopeSix = (props) => {
  const [displayingLetter, showLetter] = useState(false);
  const [speechBubble, setSpeechbubble] = useState(false);

  const bubbleText = () => {
    return(
      "Pff, useless! Take a look elswhere in the room, there must be more clues!"
    )
  }

  const clickHandler = () => {
    showLetter(true);
    setSpeechbubble(true);
  }

  return(
    <div>
      <img className="envelopeOutline" onClick={() => clickHandler()} src={EnvelopeBasic} alt="envelope" onMouseOver={e => e.currentTarget.src = EnvelopeGlow } onMouseOut={e => e.currentTarget.src = EnvelopeBasic }/>
      <Letter displayingLetter={displayingLetter} showLetter={showLetter}>
        {props.letterContent}
      </Letter>
      <SpeechBubbleReuse display={speechBubble} showBubble={setSpeechbubble} words={bubbleText}>
      </SpeechBubbleReuse>
    </div>
  );
}


const LandingRoom = () => {
  const [showEnvelopeOne, setEnvelopeOne] = useState(false);
  const [noteTwoAndJar, setNoteTwoAndJar] = useState(false);
  const [showEnvelopeThree, setEnvelopeThree] = useState(false);
  const [noteFourAndMirror, setNoteFourAndMirror] = useState(false);
  const [showEnvelopeFive, setEnvelopeFive] = useState(false); 
  const [noteSixAndCurtain, setNoteSixAndCurtain] = useState(false);
  const [showDoor, setDoor] = useState(false);
  const [showOutline, setOutline] = useState(false);
  const [showCurtains, setCurtains] = useState(false);

  return (
    <div className="LandingRoom">
      <div className="parent">
        <img className="backgroundImage" src={RoomOneImage} alt="TriceraCop" />
        <Fireplace fireplaceMethod = {setEnvelopeOne}/>
        { showEnvelopeOne ? <EnvelopeOne letterTwo = {setNoteTwoAndJar} /> : null } 
        { showEnvelopeOne ? <Horn /> : null}
        { noteTwoAndJar ? <EnvelopeTwo letterContent = {<LetterTwoContent/>} /> : null }
        { noteTwoAndJar ? <Jar jarMethod = {setEnvelopeThree}/> : null }
        { showEnvelopeThree ? <Tooth /> : null}
        { showEnvelopeThree ? <EnvelopeThree letterFour = {setNoteFourAndMirror}/> : null }
        { noteFourAndMirror ? <EnvelopeFour letterContent = {<LetterFourContent/>} /> : null }
        { noteFourAndMirror ? <Mirror mirrorMethod = {setEnvelopeFive}/> : null}
        { showEnvelopeFive ? <EnvelopeFive letterSix = {setNoteSixAndCurtain} /> : null }
        { noteSixAndCurtain ? <EnvelopeSix letterContent = {<LetterSixContent/>} /> : null }
        { noteSixAndCurtain ? <Curtains/> : null }
        { showOutline ? <ChalkOutline chalkoutlineMethod = {setMirror}/> : null }
        {showDoor ? <Door /> : null}
        <DinoCop />
        <SpeechBubble />
        <SpeechBubbleReuse />       
      </div>
    </div>
  );

};

export default LandingRoom;

// const LetterOneSpeechBubble = () => {
//   const [speechBubble, setSpeechbubble] = useState(true);

//   const bubbleText = () => {
//     return(
//       "Hey look a letter, you should read it..."
//     )
//   }
//   return(
//     <div>
//        <SpeechBubbleReuse display={speechBubble} showBubble={setSpeechbubble} words={bubbleText}>
//       </SpeechBubbleReuse>
//     </div>
//   )
// }

// const LetterOneContent = () => { 

//     return(
//       <div>
//         <p>Dear Andy,</p>
//         <p>This is letter one</p>
//         <p>Wishing you the best,</p>
//         <p>Tiffany</p>
//       </div>
//     );
// };

