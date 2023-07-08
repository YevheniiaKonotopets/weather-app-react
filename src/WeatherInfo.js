import React from "react";
import FormattedDate from "./formattedDate";
import WeatherTemp from "./WeatherTemp";
import "./WeatherInfo.css";

export default function WeatherInfo(props) {
  return (
    <div className="row weather-info">
      <div className="col-6">
        <div className="temperature">{props.data.city}</div>
        <ul>
          <li>
            <span>
              <FormattedDate date={props.data.date} />, {props.data.description}
            </span>
          </li>
          <li>Humidity: {props.data.humidity}%</li>
          <li>Wind: {Math.round(props.data.wind)}km/h</li>
        </ul>
      </div>

      <div className="col-6">
        <WeatherTemp celsius={props.data.temperature} />
        <div>
          {" "}
          <img
            src={props.data.icon}
            alt={props.data.description}
            width="75"
            height="75"
          />
        </div>
      </div>
    </div>
  );
}
