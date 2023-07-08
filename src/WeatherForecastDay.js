import React from "react";

export default function WeatherForecastDay(props) {
  console.log(props);
  let icon = props.forecast.condition.icon_url;

  function maxTemp() {
    let maxTemp = Math.round(props.forecast.temperature.maximum);
    return `${maxTemp}`;
  }

  function minTemp() {
    let minTemp = Math.round(props.forecast.temperature.minimum);
    return `${minTemp}`;
  }

  function day() {
    let date = new Date(props.forecast.time * 1000);
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let day = days[date.getDay()];
    return day;
  }

  console.log(props.forecast);
  return (
    <div className="col">
      <div className="forecast-day">{day()}</div>
      <img src={icon} alt="weather-icon" width="50" height="50" />
      <div className="forecast-temperature">
        {maxTemp()}°{" "}
        <span className="forecast-temperature-lowest">{minTemp()}°</span>
      </div>
    </div>
  );
}

/*<div className="forecast-day">{day()}</div>
      <img src={icon} alt="weather-icon" width="50" height="50" />
      <div className="forecast-temperature">
        {maxTemp()}°{" "}
        <span className="forecast-temperature-lowest">{minTemp()}°</span></div>*/
