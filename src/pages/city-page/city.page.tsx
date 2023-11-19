import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { searchByCity } from "../../api/requests";
import { IWeather } from "../../types/IWeather";
import Navigation from "../../components/navigation/navigation.component";
import "./city.page.sass";

const CityPage = () => {
	const { slug } = useParams();
	const [weatherData, setWeatherData] = useState<IWeather>();

	const getWeatherData = async () => {
		if (slug) {
			const searchByCityRes = await searchByCity(slug);

			if (searchByCityRes.cod === 200) {
				setWeatherData(searchByCityRes);
			}
			console.log(searchByCityRes);
		}
	};

	useEffect(() => {
		getWeatherData();
	}, []);

	return (
		<main className="city-page">
			<Navigation />
			{slug}
		</main>
	);
};

export default CityPage;
