import { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "./infoBox.css";

export default function InfoBox() {
  let init_Img =
    "https://images.unsplash.com/photo-1585032317668-2da731001cf3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8RGVocmFkdW58ZW58MHx8MHx8fDA%3D";
  let info = {
    city: "Dehradun",
    feelsLike: 23.27,
    humidity: 23,
    temp: 24.19,
    tempMax: 24.19,
    tempMin: 24.1,
    weather: "clear sky",
  };
  return (
    <div className="infoBox">
      <h1>Weather Info - {info.weather}</h1>

      <div className="cardContainer">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image={init_Img}
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {info.city}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              component={"span"}
            >
              <p>Humidity = {info.humidity}%</p>
              <p>Temprature = {info.temp}&deg;C</p>
              <p>Min Temprature = {info.tempMin}&deg;C</p>
              <p>Max Temprature = {info.tempMax}&deg;C</p>
              <p>
                The Weather can be described as <i>{info.weather}</i> and feels
                like {info.feelslike}&deg;
              </p>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
