import { Link } from "react-router-dom";
import "./search-modal.component.sass";

interface Props {
	items: any;
}

const SearchModal = ({ items }: Props) => {
	return (
		// TODO add link and layout
		<section className="search-modal">
			{/* @ts-ignore */}
			{items.slice(0, 3).map((item) => (
				// <Link to={`${getIdFromUrl(item.url)}`}>
				<nav className="search-modal__item">
					<a className="text search-modal__name" href={`/${item.name}`}>
						{item.name}
					</a>
				</nav>
				// </Link>
			))}
		</section>
	);
};

export default SearchModal;
