import { useParams } from "react-router-dom";
import iArrowLeft from "../../assets/arrow-left.svg";
import iBookmark from "../../assets/bookmark.svg";
import "./navigation.component.sass";

const Navigation = () => {
	const { slug } = useParams();

	return (
		<nav className="navigation">
			<section className="navigation__button">
				<img src={iArrowLeft} className="navigation__img" alt="" />
				<p className="navigation__text">Назад</p>
			</section>
			<section className="navigation__button">
				{/* TODO onClick */}
				<img src={iBookmark} className="navigation__img" alt="" />
			</section>
		</nav>
	);
};

export default Navigation;
