const API_KEY = process.env.REACT_APP_NOT_SECRET_API_KEY;
const BASE_URL = "https://api.openweathermap.org/data/2.5";

const getWeatherData = (infoType, searchParams) => {
  const url = new URL(BASE_URL + "/" + infoType);
  url.search = new URLSearchParams({ ...searchParams, appid: API_KEY });

  return fetch(url).then((res) => res.json());
};

const formatCurrentWeather = (data) => {
  const {
    coord: { lat, lon },
    main: { temp },
    weather,
    name,
    dt,
    sys: { country },
  } = data;

  const { main: details, icon } = weather[0];

  return { lat, lon, temp, name, dt, country, details, icon };
};

const formatForecastWeather = (data) => {
  let { city, list } = data;
  const timezone = city.timezone;
  // API Limitation -> 3 hour forecast: 5 days
  const daily = list
    .filter((d) => d.dt_txt.includes("12:00:00"))
    .map((d) => {
      return {
        title: getDate(d.dt, timezone),
        temp: d.main.temp,
        icon: d.weather[0].icon,
      };
    });

  return { timezone, daily };
};

const getFormattedWeatherData = async (searchParams) => {
  const formattedCurrentWeather = await getWeatherData(
    "weather",
    searchParams
  ).then((data) => formatCurrentWeather(data));

  const { lat, lon } = formattedCurrentWeather;

  const formattedForecastWeather = await getWeatherData("forecast", {
    lat,
    lon,
    units: searchParams.units,
  }).then(formatForecastWeather);

  return { ...formattedCurrentWeather, ...formattedForecastWeather };
};

export const getDate = (dt, timezone) => {
  const utc_seconds = parseInt(dt, 10) + parseInt(timezone, 10);
  const utc_milliseconds = utc_seconds * 1000;
  const local_date = new Date(utc_milliseconds).toUTCString();
  return local_date;
};

export const iconUrlFromCode = (code) =>
  `http://openweathermap.org/img/wn/${code}@2x.png`;

export default getFormattedWeatherData;
