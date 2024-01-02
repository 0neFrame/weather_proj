import moment from "moment";

const API_key = "4fe24e64144b4d92545e1c9c08b6c7d0";
// const API_key = "cb781537c5b4a64c0117f640dc95ff03";
// const API_key = "0398e399b3df2ff22e1f0e119431eda9";
const mainUrl = "https://api.openweathermap.org/data/2.5/weather?";

async function getWeather(searchParam) {
  let params = { appid: API_key };

  if (typeof searchParam === "string") {
    params.q = searchParam;
  } else if (typeof searchParam === "number") {
    params.id = searchParam;
  } else {
    params.lat = searchParam.latitude;
    params.lon = searchParam.longitude;
  }

  params = new URLSearchParams(params).toString();
  const response = await fetch(mainUrl + params);
  if (response.ok) return response.json();
}

async function setWeatherProperty(coord) {
  return await getWeather(coord).then((item) => {
    return setCityProperty(item);
  });
}

function setCityProperty(city) {
  return {
    country: city.sys.country,
    dt: moment().subtract(1, "s"),
    fromNow: moment().fromNow(),
    humidity: city.main.humidity,
    id: city.id,
    name: city.name,
    temp: getTemp(city.main.temp),
    weather: city.weather[0].main,
  };
}

function getTemp(temp) {
  return Math.round(temp - 273.15);
}

export { getWeather, setWeatherProperty, setCityProperty, getTemp };
