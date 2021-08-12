import React from "react";
import "./App.css";
import LandingRoom from "./components/landing-room/LandingRoom";
import RoomOne from "./components/room-one/RoomOne";

function App() {
  const [data, setData] = React.useState(null);

  // React.useEffect(() => {
  //   fetch("/api")
  //     .then((res) => res.json())
  //     .then((data) => setData(data.message));
  // }, []);

  return (
    <div className="App">
      <LandingRoom />
      <RoomOne />
    </div>
  );
}

export default App;