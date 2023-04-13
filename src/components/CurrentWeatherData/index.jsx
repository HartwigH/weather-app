import React from "react";
import "./currentWeatherData.scss";
import { iconUrlFromCode } from "../../services/weatherService";

function CurrentWeatherData({ weather: { temp, details, icon } }) {
  return (
    <div className="currentWeatherData">
      <p className="currentWeatherData--current">{details}</p>

      <div className="currentWeatherData__wrapper">
        <img src={iconUrlFromCode(icon)} alt="" />
        <p>{temp.toFixed()}º</p>
      </div>
    </div>
  );
}

export default CurrentWeatherData;
