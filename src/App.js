import React from "react";
// import logo from "./img/Charrr.png";
import "./App.css";
import LandingRoom from "./components/landing-room/LandingRoom";

function App() {
  // const [data, setData] = React.useState(null);

  // React.useEffect(() => {
  //   fetch("/api")
  //     .then((res) => res.json())
  //     .then((data) => setData(data.message));
  // }, []);

  return (
    <div className="App">
      <LandingRoom />
    </div>
  );
}

export default App;