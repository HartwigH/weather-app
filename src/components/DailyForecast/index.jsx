import React from "react";
import "./dailyForecast.scss";
import { iconUrlFromCode } from "../../services/weatherService";

function DailyForecast({ items }) {
  return (
    <div className="dailyForecast">
      <p className="dailyForecast--title">Daily forecast</p>
      <hr className="dailyForecast--hr" />

      <div className="dailyForecast__days">
        {items.map((item, index) => (
          <div className="dailyForecast__days--day" key={index}>
            <p>{item.title.substring(0, item.title.indexOf(","))}</p>
            <img src={iconUrlFromCode(item.icon)} alt="" />
            <div>{item.temp.toFixed()}º</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DailyForecast;
