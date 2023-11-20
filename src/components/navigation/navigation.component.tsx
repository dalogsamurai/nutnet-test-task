import { Link, useParams } from "react-router-dom";
import { ReactComponent as IArrowLeft } from "../../assets/arrow-left.svg";
import { ReactComponent as IBookmark } from "../../assets/bookmark.svg";
import { ReactComponent as IBookmarkActive } from "../../assets/bookmark-active.svg";
import {
	addNewCity,
	isCityAdded,
	removeCity,
} from "../../utils/localStorageActions";
import { useState } from "react";
import "./navigation.component.sass";

const Navigation = () => {
	const { slug } = useParams();
	const [isBookmarkActive, setBookmarkActive] = useState(isCityAdded(slug!));

	return (
		<nav className="navigation">
			<Link to="/">
				<section className="navigation__button">
					<IArrowLeft className="navigation__img" />
					<p className="navigation__text">Назад</p>
				</section>
			</Link>
			<section className="navigation__button">
				{isBookmarkActive && (
					<IBookmarkActive
						className="navigation__img"
						onClick={() => {
							removeCity(slug!);
							setBookmarkActive(false);
						}}
					/>
				)}
				{!isBookmarkActive && (
					<IBookmark
						className="navigation__img"
						onClick={() => {
							addNewCity(slug!);
							setBookmarkActive(true);
						}}
					/>
				)}
			</section>
		</nav>
	);
};

export default Navigation;
