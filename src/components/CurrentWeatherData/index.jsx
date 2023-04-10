import React from "react";
import "./currentWeatherData.scss";

function CurrentWeatherData() {
  return (
    <div className="currentWeatherData">
      <p className="currentWeatherData--current">Clear</p>

      <div className="currentWeatherData__wrapper">
        <i className="wi wi-night-sleet"></i>
        <p>10 ºC</p>
      </div>
    </div>
  );
}

export default CurrentWeatherData;
