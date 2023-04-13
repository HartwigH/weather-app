import React, { useState } from "react";
import "./inputs.scss";
import SearchIcon from "@mui/icons-material/Search";
import LocationOnIcon from "@mui/icons-material/LocationOn";

function Inputs({ setQuery, units, setUnits }) {
  const [city, setCity] = useState("");
  const [lat, setLat] = useState("");
  const [lon, setLon] = useState("");

  const handleSearchClick = () => {
    if (city !== "") setQuery({ q: city });
    if ((city === "") & (lat !== "") & (lon !== "")) setQuery({ lat, lon });
  };

  const handleLocationClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;

        setQuery({
          lat,
          lon,
        });
      });
    }
  };

  const handleUnitsChange = (e) => {
    const selectedUnit = e.currentTarget.name;

    if (units !== selectedUnit) setUnits(selectedUnit);
  };

  return (
    <div className="inputs">
      <div className="inputs__container">
        <div className="inputs__container__wrapper">
          <div className="inputs__container__form">
            <label className="inputs__container--label" htmlFor="city">
              Enter City
            </label>
            <input
              id="city"
              value={city}
              onChange={(e) => {
                setCity(e.currentTarget.value);
                setLat("");
                setLon("");
              }}
              type="text"
              placeholder="Search city..."
              className="inputs__container--input"
            />
          </div>
          <p className="inputs__container--spacer">Or </p>
          <div className="inputs__container__form">
            <div className="inputs__container__form--geo">
              <label className="inputs__container--label" htmlFor="lat">
                Lat
              </label>
              <input
                key="lat"
                value={lat}
                onChange={(e) => {
                  setLat(e.currentTarget.value);
                  setCity("");
                }}
                type="text"
                placeholder="Lat..."
                className="inputs__container--input inputs__container--geo"
              />
            </div>
            <div className="inputs__container__form--geo">
              <label className="inputs__container--label" htmlFor="lon">
                Lon
              </label>
              <input
                key="lon"
                value={lon}
                onChange={(e) => {
                  setLon(e.currentTarget.value);
                  setCity("");
                }}
                type="text"
                placeholder="Lon..."
                className="inputs__container--input inputs__container--geo"
              />
            </div>
          </div>
        </div>

        <SearchIcon
          className="inputs__container--icon"
          onClick={handleSearchClick}
        />
        <LocationOnIcon
          className="inputs__container--icon"
          onClick={handleLocationClick}
        />
      </div>

      <div className="inputs__temperature">
        <button
          className={`inputs__temperature--button ${
            units === "metric" ? "inputs__temperature--button--active" : ""
          }`}
          name="metric"
          onClick={handleUnitsChange}
        >
          ºC
        </button>
        <p className="inputs__temperature--spacer">|</p>
        <button
          className={`inputs__temperature--button ${
            units === "imperial" ? "inputs__temperature--button--active" : ""
          }`}
          name="imperial"
          onClick={handleUnitsChange}
        >
          ºF
        </button>
      </div>
    </div>
  );
}

export default Inputs;
