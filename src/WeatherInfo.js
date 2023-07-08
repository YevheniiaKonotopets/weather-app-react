import React from "react";
import FormattedDate from "./formattedDate";
import WeatherTemp from "./WeatherTemp";
import "./WeatherInfo.css";

export default function WeatherInfo(props) {
  return (
    <div className="weather-info">
      <div class="row">
        <div class="col-6">
          <div className="temperature">{props.data.city}</div>
          <ul>
            <li>
              <span>
                <FormattedDate date={props.data.date} />,{" "}
                {props.data.description}
              </span>
            </li>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {Math.round(props.data.wind)}km/h</li>
          </ul>
        </div>
        <div class="col-6">
          <WeatherTemp celsius={props.data.temperature} />
          <div>
            {" "}
            <img src={props.data.icon} alt={props.data.description} />
          </div>
        </div>
      </div>
    </div>
  );
}
