import { IWeather } from "../types/IWeather";

export const formatSunsetTime = (weather: IWeather) => {
  const hours = new Date(weather.sys.sunset).getHours();
  const minutes = new Date(weather.sys.sunset).getMinutes();

  return `Закат в ${hours}:${minutes}`;
};
