import { IWeather } from "../types/IWeather";

export const formatDescription = (weather: IWeather) => {
  return (
    weather.weather[0].description[0].toUpperCase() +
    weather.weather[0].description.slice(1)!
  );
};
