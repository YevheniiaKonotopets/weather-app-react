import React, { useState, useEffect } from "react";
import axios from "axios";
import "./WeatherForecast.css";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.data.city]);

  function displayForecast(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="row weather-forcast">
        {forecast.map(function (dailyForecast, index) {
          if (index < 6) {
            return <WeatherForecastDay forecast={dailyForecast} />;
          }
        })}
      </div>
    );
  } else {
    let city = props.data.city;
    let url = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=bfb7te16e3bfb40a3db6aod25134ef7e&units=metric`;
    axios.get(url).then(displayForecast);
    return "Loading...";
  }
}
