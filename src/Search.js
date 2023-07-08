import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import "bootstrap/dist/css/bootstrap.css";
import "./Search.css";

export default function Search() {
  let [city, setCity] = useState("");
  let [weather, setWeather] = useState({});
  let [load, setLoad] = useState(false);

  function updateCity(event) {
    setCity(event.target.value);
  }

  function displayWeather(response) {
    setLoad(true);
    setWeather({
      city: response.data.name,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      description: response.data.weather[0].description,
      date: new Date(response.data.dt * 1000),
    });
  }

  function showWeatherData(city) {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=3a94f3778290bfeee61278505dbbe51d&units=metric`;
    axios.get(url).then(displayWeather);
  }

  function handleSubmit(event) {
    event.preventDefault();
    showWeatherData(city);
  }

  if (load) {
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <div class="row">
            <div class="col-9">
              <input
                type="search"
                placeholder="Enter the city ..."
                onChange={updateCity}
                className="search-input"
              />
            </div>
            <div class="col-3">
              <input
                type="submit"
                value="Search"
                class="btn btn-light w-100 search-button"
              />
            </div>
          </div>
        </form>
        <hr />

        <WeatherInfo data={weather} />
      </div>
    );
  } else {
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <div class="row">
            <div class="col-9">
              <input
                type="search"
                placeholder="Enter the city ..."
                onChange={updateCity}
                className="search-input"
              />
            </div>
            <div class="col-3">
              <input
                type="submit"
                value="Search"
                class="btn btn-light w-100 search-button"
              />
            </div>
          </div>
        </form>
      </div>
    );
  }
}
