import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./searchBox.css";
import { useState } from "react";

export default function SearchBox() {
  let [city, setCity] = useState("");

  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_Key = "b5c24bad9a0f7d39f13602a37077a5f9";

  let getWeatherInfo = async () => {
    let response = await fetch(
      `${API_URL}?q=${city}&appid=${API_Key}&units=metric`
    );
    let jsonResponse = await response.json();
    console.log(jsonResponse);
    let result = {
      temp: jsonResponse.main.temp,
      tempMax: jsonResponse.main.temp_max,
      tempMin: jsonResponse.main.temp_min,
      humidity: jsonResponse.main.humidity,
      feelsLike: jsonResponse.main.feels_like,
      description: jsonResponse.weather[0].description,
    };
    console.log(result);
  };

  let handleChange = (event) => {
    setCity(event.target.value);
  };

  let handleSubmit = (event) => {
    event.preventDefault();
    console.log(city);
    setCity("");
    getWeatherInfo();
  };
  return (
    <div className="searchBox">
      <h3>Search for the weather</h3>
      <form onSubmit={handleSubmit}>
        <TextField
          id="city"
          label="City Name"
          variant="outlined"
          value={city}
          required
          onChange={handleChange}
        />
        <br />
        <br />
        <Button variant="contained" size="large" type="submit">
          Search
        </Button>
      </form>
    </div>
  );
}
