import "./style/App.scss";
import "./style/weather-icons/sass/weather-icons.min.scss";
import Inputs from "./components/Inputs";
import CurrentLocale from "./components/CurrentLocale";
import CurrentWeatherData from "./components/CurrentWeatherData";
import DailyForecast from "./components/DailyForecast";

function App() {
  return (
    <div className="app">
      <div className="container">
        <Inputs />
        <CurrentLocale />
        <CurrentWeatherData />
        <DailyForecast />
      </div>
    </div>
  );
}

export default App;
