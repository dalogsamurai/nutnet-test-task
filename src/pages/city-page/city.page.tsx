import Navigation from "../../components/navigation/navigation.component";
import CityWeather from "../../components/city-weather/city-weather.component";
import "./city.page.sass";

const CityPage = () => {
	return (
		<main className="city-page">
			<Navigation />
			<CityWeather />
		</main>
	);
};

export default CityPage;
