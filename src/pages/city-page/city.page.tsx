import Navigation from "../../components/navigation/navigation.component";
import CityWeather from "../../components/city-weather/city-weather.component";
import Header from "../../components/header/header.component";
import "./city.page.sass";

const CityPage = () => {
	return (
		<>
			<Header />
			<main className="city-page">
				<Navigation />
				<CityWeather />
			</main>
		</>
	);
};

export default CityPage;
