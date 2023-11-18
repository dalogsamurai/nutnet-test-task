import CityList from "../city-list/city-list.component";
import CityInput from "../city-input/city-input.component";
import "./main.component.sass";

const Main = () => {
	return (
		<main className="main">
			<CityInput />
			<CityList />
		</main>
	);
};

export default Main;
