import React, { useState } from "react";
import "./WeatherTemp.css";

export default function WeatherTemp(props) {
  const [unit, setUnit] = useState("celsius");

  function convertToFarenheit(event) {
    event.preventDefault();
    setUnit("farenheit");
  }

  function calculateFarenheit() {
    return (props.celsius * 9) / 5 + 32;
  }

  function convertToCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  if (unit === "celsius") {
    return (
      <div className="temperature">
        {Math.round(props.celsius)}
        <span className="unit">
          °C|
          <a href="/" onClick={convertToFarenheit}>
            °F
          </a>
        </span>
      </div>
    );
  } else {
    return (
      <div className="temperature">
        {Math.round(calculateFarenheit())}
        <span className="unit">
          <a href="/" onClick={convertToCelsius}>
            °C
          </a>
          |°F
        </span>
      </div>
    );
  }
}
