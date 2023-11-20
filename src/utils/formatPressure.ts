import { IWeather } from "../types/IWeather";

export const formatPressure = (weather: IWeather) => {
  return `${weather.main.pressure} мм рт.ст.`;
};
