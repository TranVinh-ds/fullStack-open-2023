import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

const Weather = ({ capital }) => {
  const WEATHER_API_KEY = process.env.REACT_APP_API_KEY;
  const [weatherData, setWeatherData] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${capital}&units=metric&appid=${WEATHER_API_KEY}`
      )
      .then((response) => {
        setWeatherData(response.data);
      });
  }, []);

  return (
    <div>
      {weatherData.main ? (
        <div>
          <h2>Weather in {capital}</h2>
          <div>Temperature {weatherData.main.temp} Celcius</div>
          <img
            src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
            alt="weather icon"
          />
          <div>Wind {weatherData.wind.speed} m/s</div>
        </div>
      ) : null}
    </div>
  );
};

export default Weather;
