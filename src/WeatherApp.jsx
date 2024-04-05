import SearchBox from "./searchBox.jsx";
import InfoBox from "./infobox.jsx";
import { useState } from "react";

export default function WeatherApp() {
  const [weatherInfo, setWeatherInfo] = useState({
    city: "Dehradun",
    feelsLike: 23.27,
    humidity: 23,
    temp: 24.19,
    tempMax: 24.19,
    tempMin: 24.1,
    weather: "clear sky",
  });

  let updateInfo = (newInfo) => {
    setWeatherInfo(newInfo);
  };
  return (
    <div>

      <SearchBox updateInfo={updateInfo} />
      <InfoBox info={weatherInfo} />
    </div>
  );
}
