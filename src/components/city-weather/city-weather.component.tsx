import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IWeather } from "../../types/IWeather";
import { searchByCity } from "../../api/requests";
import { IFormatData } from "../../types/IFormatData";
import { formatData } from "../../utils/formatData";
import iBarometer from "../../assets/barometer.svg";
import WeatherImg from "../weather-img/weather-img.component";
import "./city-weather.component.sass";

const CityWeather = () => {
	const { slug } = useParams();
	const [weatherData, setWeatherData] = useState<IWeather>();
	const [formatedData, setFormatedData] = useState<IFormatData>();

	const getWeatherData = async () => {
		if (slug) {
			const searchByCityRes = await searchByCity(slug);

			if (searchByCityRes.cod === 200) {
				setWeatherData(searchByCityRes);
			}
		}
	};

	useEffect(() => {
		getWeatherData();
	}, []);

	useEffect(() => {
		if (weatherData) {
			setFormatedData(formatData(weatherData));
		}
	}, [weatherData]);

	return (
		<>
			<section className="city-weather">
				<section className="city-weather__main">
					<section className="city-weather__title">
						<p className="city-weather__name">{weatherData?.name}</p>
						<p className="city-weather__description">
							{formatedData?.description}
						</p>
					</section>
					<section className="city-weather__temp">
						<p className="city-weather__value">{formatedData?.temp}</p>
						<WeatherImg weatherType={weatherData?.weather[0].main!} />
					</section>
					<section className="city-weather__bottom">
						<section className="city-weather__pressure">
							<img src={iBarometer} alt="" />
							<p>{formatedData?.pressure}</p>
						</section>
						<p className="city-weather__sunset">{formatedData?.sunset}</p>
					</section>
				</section>
			</section>
		</>
	);
};

export default CityWeather;
