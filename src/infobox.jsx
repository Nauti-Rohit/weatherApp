import { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import "./infoBox.css";

export default function InfoBox({ info }) {
  let init_URL =
    "https://images.unsplash.com/photo-1585032317668-2da731001cf3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8RGVocmFkdW58ZW58MHx8MHx8fDA%3D";

  let hot_URL =
    "https://images.unsplash.com/photo-1521223619409-8085d2607891?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGhvdCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
  let cold_URL =
    "https://images.unsplash.com/photo-1603726574752-a85dc808deab?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGNvbGQlMjB3ZWF0aGVyfGVufDB8fDB8fHww";
  let rain_URL =
    "https://images.unsplash.com/photo-1613739118925-cde1e8f5d65b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cmFpbiUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";

  return (
    <div className="infoBox">
      <div className="cardContainer">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image={
              info.humidity > 80
                ? rain_URL
                : info.temp > 15
                ? hot_URL
                : cold_URL
            }
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {info.city}{" "}
              {info.humidity > 80 ? (
                <ThunderstormIcon />
              ) : info.temp > 15 ? (
                <WbSunnyIcon />
              ) : (
                <AcUnitIcon />
              )}
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
                The Weather can be described as <i>{info.description}</i> and
                feels like {info.feelsLike}&deg;
              </p>
            </Typography>
          </CardContent>
        </Card>
      </div>
      <p style={{ fontSize: "0.8rem ", color: "red" }}>
        CreatedBy @rohitnautiyal
      </p>
    </div>
  );
}
