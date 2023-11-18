import iLogo from "../../assets/logo.svg";
import "./header.component.sass";

const Header = () => {
	return (
		<header className="header">
			<div className="header__block">
				<img src={iLogo} className="header__logo" alt="" />
			</div>
			<h1 className="text header__title">WeatherCheck</h1>
		</header>
	);
};

export default Header;
