import { LS_CITIES } from "../constants";

export const getCitiesFromLS = () => {
	const cities = localStorage.getItem(LS_CITIES);
	const citiesList = JSON.parse(cities!);

	return citiesList;
};

export const addNewCity = (slug: string) => {
	const cities = localStorage.getItem(LS_CITIES);
	const citiesList = JSON.parse(cities!);

	if (!citiesList) {
		localStorage.setItem(LS_CITIES, JSON.stringify([...[], slug]));
	} else {
		if (!citiesList.includes(slug)) {
			localStorage.setItem(LS_CITIES, JSON.stringify([...citiesList, slug]));
		}
	}
};
