import { useParams } from "react-router-dom";
import iLogo from "../../assets/logo.svg";
import { useWidth } from "../../hooks/use-width";
import "./header.component.sass";

const Header = () => {
	const { slug } = useParams();
	const { isMobileWidth } = useWidth();

	return slug && isMobileWidth ? null : (
		<header className="header">
			<div className="header__block">
				<img src={iLogo} className="header__logo" alt="" />
			</div>
			<h1 className="text header__title">WeatherCheck</h1>
		</header>
	);
};

export default Header;
