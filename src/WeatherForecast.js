import React, { useState } from "react";
import axios from "axios";
import "./WeatherForecast.css";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  function displayForecast(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="row weather-forcast">
        <WeatherForecastDay forecast={forecast[0]} />
      </div>
    );
  } else {
    let city = props.data.city;
    let url = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=bfb7te16e3bfb40a3db6aod25134ef7e&units=metric`;
    axios.get(url).then(displayForecast);
  }
}
