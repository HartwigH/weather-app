import React from "react";
import "./currentLocale.scss";
import { getDate } from "../../services/weatherService";

function CurrentLocale({ weather: { dt, timezone, name, country } }) {
  return (
    <div className="currentLocale">
      <p className="currentLocale--title">{getDate(dt, timezone)}</p>

      <div className="currentLocale__data">
        <p className="currentLocale__data--header">{`${name}, ${country}`}</p>
      </div>
    </div>
  );
}

export default CurrentLocale;
