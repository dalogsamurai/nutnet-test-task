import { Link } from "react-router-dom";
import "./search-modal.component.sass";
import { ICity } from "../../types/ICity";

interface Props {
  items: ICity[];
}

const SearchModal = ({ items }: Props) => {
  return (
    <section className="search-modal">
      {/* @ts-ignore */}
      {items.slice(0, 3).map((item) => (
        <nav className="search-modal__item">
          <a className="text search-modal__name" href={`/${item.name}`}>
            {item.name}
          </a>
        </nav>
      ))}
    </section>
  );
};

export default SearchModal;
