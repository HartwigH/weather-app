import React from "react";
import "./inputs.scss";
import SearchIcon from "@mui/icons-material/Search";
import LocationOnIcon from "@mui/icons-material/LocationOn";

function Inputs() {
  return (
    <div className="inputs">
      <div className="inputs__container">
        <input
          type="text"
          placeholder="Search..."
          className="inputs__container--input"
        />
        <SearchIcon className="inputs__container--icon" />
        <LocationOnIcon className="inputs__container--icon" />
      </div>

      <div className="inputs__temperature">
        <button className="inputs__temperature--button" name="metric">
          ºC
        </button>
        <p className="inputs__temperature--spacer">|</p>
        <button className="inputs__temperature--button" name="imperial">
          ºF
        </button>
      </div>
    </div>
  );
}

export default Inputs;
