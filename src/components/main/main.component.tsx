import CityList from "../city-list/city-list.component";
import CityInput from "../city-input/city-input.component";
import Header from "../header/header.component";
import "./main.component.sass";

const Main = () => {
	return (
		<>
			<Header />
			<section className="main">
				<CityInput />
				<CityList />
			</section>
		</>
	);
};

export default Main;
