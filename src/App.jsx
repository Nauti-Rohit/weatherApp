import "./App.css";
import WeatherApp from "./WeatherApp";

function App() {
  let bgImg= "https://images.unsplash.com/photo-1580193769210-b8d1c049a7d9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
  return (
    <>
      <WeatherApp style={{ backgroundImage: `url(${bgImg})` }} />
    </>
  );
}

export default App;
