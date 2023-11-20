import { IWeather } from "../types/IWeather";

export const formatTemp = (weather: IWeather) => {
  return `${Math.floor(weather.main.temp)}°`;
};
