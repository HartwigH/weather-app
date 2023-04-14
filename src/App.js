import "./style/App.scss";
import "./style/weather-icons/sass/weather-icons.min.scss";
import Inputs from "./components/Inputs";
import CurrentLocale from "./components/CurrentLocale";
import CurrentWeatherData from "./components/CurrentWeatherData";
import DailyForecast from "./components/DailyForecast";
import getFormattedWeatherData from "./services/weatherService";
import { useState } from "react";
import { useEffect } from "react";

function App() {
  const [query, setQuery] = useState();
  const [units, setUnits] = useState("metric");
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    if (query) {
      localStorage.setItem("query", JSON.stringify(query));
    }
  }, [query]);

  useEffect(() => {
    const saved = localStorage.getItem("query");

    if (saved) {
      const initialValue = JSON.parse(saved);
      if (initialValue) {
        setQuery(initialValue);
      }
    } else {
      setQuery({ q: "tallinn" });
    }
  }, []);

  useEffect(() => {
    if (query) {
      const fetchWeather = async () => {
        await getFormattedWeatherData({ ...query, units }).then((data) => {
          setWeather(data);
        });
      };

      fetchWeather();
    }
  }, [query, units]);

  return (
    <div className="app">
      <div className="container">
        <Inputs setQuery={setQuery} units={units} setUnits={setUnits} />

        {weather && (
          <>
            <CurrentLocale weather={weather} />
            <CurrentWeatherData weather={weather} />
            <DailyForecast items={weather.daily} />
          </>
        )}
      </div>
    </div>
  );
}

export default App;
