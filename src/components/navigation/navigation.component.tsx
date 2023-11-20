import { Link, useParams } from "react-router-dom";
import iArrowLeft from "../../assets/arrow-left.svg";
import iBookmark from "../../assets/bookmark.svg";
import { addNewCity } from "../../utils/localStorageActions";
import "./navigation.component.sass";

const Navigation = () => {
	const { slug } = useParams();

	return (
		<nav className="navigation">
			<Link to="/">
				<section className="navigation__button">
					<img src={iArrowLeft} className="navigation__img" alt="" />
					<p className="navigation__text">Назад</p>
				</section>
			</Link>
			<section className="navigation__button">
				{/* rome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
				<img
					src={iBookmark}
					onClick={() => addNewCity(slug!)}
					className="navigation__img"
					alt=""
				/>
			</section>
		</nav>
	);
};

export default Navigation;
