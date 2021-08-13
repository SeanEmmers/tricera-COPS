import React from "react";
import "./App.css";
import LandingRoom from "./components/landing-room/LandingRoom";
import 'bootstrap/dist/css/bootstrap.min.css';

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
    </div>
  );
}

export default App;