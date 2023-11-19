import { useEffect, useState } from "react";
import { ICity } from "../../types/ICity";
import iArrow from "../../assets/arrow.svg";
import iBookmark from "../../assets/bookmark.svg";
import { searchByCity } from "../../api/requests";
import { getCityFromDb } from "../../utils/getCityFromDb";
import SearchModal from "../search-modal/search-modal.component";
import "./city-input.component.sass";
import { getRandomCityFromDb } from "../../utils/getRandomCityFromDb";

const CityInput = () => {
	const [searchStr, setSearchStr] = useState("");
	const cityList: ICity[] = [];
	const [isModalOpen, setModalOpen] = useState(false);
	const [searchRes, setSearchRes] = useState([]);
	const [randomCity, setRandomCity] = useState("");

	const search = async () => {
		const searchByCityRes = await searchByCity(searchStr);
		const getCityFromDbRes = getCityFromDb(searchStr);

		if (searchByCityRes.cod === 200) {
			// @ts-ignore
			setSearchRes([...getCityFromDbRes.splice(0.3), searchByCityRes]);
		} else {
			// @ts-ignore
			setSearchRes([...getCityFromDbRes.splice(0.3)]);
		}
		setModalOpen(true);
	};

	useEffect(() => {
		if (searchStr.length > 2) {
			search();
		} else {
			setModalOpen(false);
		}
	}, [searchStr]);

	useEffect(() => {
		setRandomCity(getRandomCityFromDb());
	}, []);

	return (
		<section className="city-input">
			<input
				className="city-input__input"
				placeholder="Укажите город"
				value={searchStr}
				// @ts-ignore
				onInput={(e) => setSearchStr(e.target.value)}
			/>

			{searchRes && isModalOpen && <SearchModal items={searchRes} />}

			{cityList.length < 1 && (
				<>
					<section className="city-input__empty">
						<img src={iArrow} alt="" />
						<p className="city-input__title text">
							Начните{"\u00A0"}вводить{"\u00A0"}город, например,{" "}
							{/* rome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
							<span
								className="city-input__link"
								onClick={() => setSearchStr(randomCity)}
							>
								{`${randomCity}`}
							</span>
						</p>
					</section>

					<section className="city-input__add-bookmarks">
						<p className="city-input__title text">
							Используйте значок «закладки», чтобы{"\u00A0"}закрепить{"\u00A0"}
							город
							{"\u00A0"}на
							{"\u00A0"}
							главной
						</p>
						<img src={iBookmark} alt="" />
					</section>
				</>
			)}
		</section>
	);
};

export default CityInput;
