import { Link } from "react-router-dom";
import "./search-modal.component.sass";

interface Props {
	items: any;
}

const SearchModal = ({ items }: Props) => {
	return (
		// TODO add link and layout
		<div className="search-modal">
			{items.map((item) => (
				// <Link to={`${getIdFromUrl(item.url)}`}>
				<div className="search-modal__item">
					<div className="search-modal__name">{item.name}</div>
				</div>
				// </Link>
			))}
		</div>
	);
};

export default SearchModal;
