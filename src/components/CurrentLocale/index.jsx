import React from "react";
import "./currentLocale.scss";

function CurrentLocale() {
  return (
    <div className="currentLocale">
      <p className="currentLocale--title">
        Tuesday, 21 April 2023 | Local time: 15:47
      </p>

      <div className="currentLocale__data">
        <p className="currentLocale__data--header">Tallinn, EE</p>
      </div>
    </div>
  );
}

export default CurrentLocale;
