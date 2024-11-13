import { useEffect, useState } from "react";
import { IWeather } from "../../types/IWeather";
import { IFormatData } from "../../types/IFormatData";
import { searchByCityAPI } from "../../api/requests";
import { formatData } from "../../utils/formatData";
import WeatherImg from "../weather-img/weather-img.component";
import { Link } from "react-router-dom";
import "./city-card.component.sass";

interface Props {
	slug: string;
}

const CityCard = ({ slug }: Props) => {
	const [weatherData, setWeatherData] = useState<IWeather>();
	const [formatedData, setFormatedData] = useState<IFormatData>();

	const getWeatherData = async () => {
		if (slug) {
			const searchByCityRes = await searchByCityAPI(slug);

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
		<Link to={`/${slug}`}>
			<section className="city-card">
				<p className="city-card__name">{weatherData?.name}</p>
				<p className="city-card__temp">{formatedData?.temp}</p>
				<WeatherImg
					isSmall={true}
					weatherType={weatherData?.weather[0].main!}
				/>
			</section>
		</Link>
	);
};

export default CityCard;
