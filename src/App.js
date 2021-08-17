import React from "react";
import "./App.css";
import LandingRoom from "./components/landing-room/LandingRoom";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar} from "react-bootstrap";
import {Container, Row, Col} from "react-bootstrap";


function App() {
 
  const [data, setData] = React.useState(null);

  // React.useEffect(() => {
  //   fetch("/api")
  //     .then((res) => res.json())
  //     .then((data) => setData(data.message));
  // }, []);

  return (
    <div className="App">
      <Navbar fixed="top" class="navbar" variant="dark">
        <Container>
          <Navbar.Brand>TriceraCops</Navbar.Brand>
        </Container>
      </Navbar>
      <br />
      <br />
      <Container>
        <br />
        <br />
        <LandingRoom />
      </Container>
    </div>
  );
}

export default App;