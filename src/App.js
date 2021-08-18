import React from "react";
import "./App.css";
import LandingRoom from "./components/landing-room/LandingRoom";
import 'bootstrap/dist/css/bootstrap.min.css';
// import {Navbar} from "react-bootstrap";
import {Navbar,Container} from "react-bootstrap";
import {Route, Link} from 'react-router-dom'
import Home from "./components/homepage/home.js"
import Hat from "./components/homepage/HomeImage/TheHatfull.png"


function App() {
 
  const [data, setData] = React.useState(null);

  // React.useEffect(() => {
  //   fetch("/api")
  //     .then((res) => res.json())
  //     .then((data) => setData(data.message));
  // }, []);

  return (
    <div className="App">
      <Navbar class="navbar" variant="dark">
        <Container>
          <Navbar.Brand href="/">
            <img              
              src={Hat}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
           TriceraCops
          </Navbar.Brand>
          <Navbar.Text>
           About Us?
          </Navbar.Text>
        </Container>
      </Navbar>
      <Container>
        <Route exact path="/" component={Home} />
        <Route exact path="/play" component={LandingRoom} />
        <br />
        <br />
      </Container>
    </div>
  );
}

export default App;