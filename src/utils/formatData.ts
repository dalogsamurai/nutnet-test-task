import { IWeather } from "../types/IWeather";

const formatDescription = (weather: IWeather) => {
	return (
		weather.weather[0].description[0].toUpperCase() +
		weather.weather[0].description.slice(1)!
	);
};

const formatPressure = (weather: IWeather) => {
	return `${weather.main.pressure} мм рт.ст.`;
};

const formatSunsetTime = (weather: IWeather) => {
	const hours = new Date(weather.sys.sunset).getHours();
	const minutes = new Date(weather.sys.sunset).getMinutes();

	return `Закат в ${hours}:${minutes}`;
};

const formatTemp = (weather: IWeather) => {
	return `${Math.floor(weather.main.temp)}°`;
};

export const formatData = (weather: IWeather) => {
	return {
		sunset: formatSunsetTime(weather),
		description: formatDescription(weather),
		pressure: formatPressure(weather),
		temp: formatTemp(weather),
	};
};
