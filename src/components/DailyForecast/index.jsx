import React from "react";
import "./dailyForecast.scss";

function DailyForecast() {
  return (
    <div className="dailyForecast">
      <p className="dailyForecast--title">Daily forecast</p>
      <hr className="dailyForecast--hr" />

      <div className="dailyForecast__days">
        <div className="dailyForecast__days--day">
          <p>Wed</p>
          <i className="wi wi-night-sleet"></i>
          <div>10 ºC</div>
        </div>

        <div className="dailyForecast__days--day">
          <p>Wed</p>
          <i className="wi wi-night-sleet"></i>
          <div>10 ºC</div>
        </div>

        <div className="dailyForecast__days--day">
          <p>Wed</p>
          <i className="wi wi-night-sleet"></i>
          <div>10 ºC</div>
        </div>

        <div className="dailyForecast__days--day">
          <p>Wed</p>
          <i className="wi wi-night-sleet"></i>
          <div>10 ºC</div>
        </div>

        <div className="dailyForecast__days--day">
          <p>Wed</p>
          <i className="wi wi-night-sleet"></i>
          <div>10 ºC</div>
        </div>

        <div className="dailyForecast__days--day">
          <p>Wed</p>
          <i className="wi wi-night-sleet"></i>
          <div>10 ºC</div>
        </div>
      </div>
    </div>
  );
}

export default DailyForecast;
