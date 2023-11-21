import { Link } from "react-router-dom";
import { ICity } from "../../types/ICity";
import "./search-modal.component.sass";

interface Props {
	items: ICity[];
	inputValue: number;
}

const SearchModal = ({ items, inputValue }: Props) => {
	return (
		<section className="search-modal">
			{/* @ts-ignore */}
			{items.slice(0, 3).map((item) => (
				<Link to={`/${item.name}`}>
					<nav className="search-modal__item">
						<p className="text search-modal__name">
							{item.name.slice(0, inputValue)}
							<span className="search-modal__name_unactive">
								{item.name.slice(inputValue)}
							</span>
						</p>
					</nav>
				</Link>
			))}
		</section>
	);
};

export default SearchModal;
