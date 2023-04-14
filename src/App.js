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
  const [status, setStatus] = useState("Loading...");

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
      setStatus("Loading...");
      const fetchWeather = async () => {
        try {
          await getFormattedWeatherData({ ...query, units }).then((data) => {
            setWeather(data);
            setStatus("Done");
          });
        } catch (error) {
          setStatus("Error");
        }
      };

      fetchWeather();
    }
  }, [query, units]);

  const setBackgroundColor = () => {
    if (!weather) return "cold";
    const threshold = units === "metric" ? 20 : 60;
    if (weather.temp <= threshold) return "cold";

    return "warm";
  };

  return (
    <div className="app">
      <div className={`container ${setBackgroundColor()}`}>
        <Inputs
          setQuery={setQuery}
          units={units}
          setUnits={setUnits}
          setStatus={setStatus}
        />

        {weather && status === "Done" && (
          <>
            <CurrentLocale weather={weather} />
            <CurrentWeatherData weather={weather} />
            <DailyForecast items={weather.daily} />
          </>
        )}

        <div className="container__feedback">
          {status === "Loading..." && <p>{status}</p>}
          {status === "Error" && <p>{status}</p>}
        </div>
      </div>
    </div>
  );
}

export default App;
