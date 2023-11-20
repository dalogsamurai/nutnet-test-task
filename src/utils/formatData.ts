import { IWeather } from "../types/IWeather";
import { formatDescription } from "./formatDescription";
import { formatPressure } from "./formatPressure";
import { formatSunsetTime } from "./formatSunsetTime";
import { formatTemp } from "./formatTemp";

export const formatData = (weather: IWeather) => {
  return {
    sunset: formatSunsetTime(weather),
    description: formatDescription(weather),
    pressure: formatPressure(weather),
    temp: formatTemp(weather),
  };
};
