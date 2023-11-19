import db from "../db/city.list.json";

export const getRandomCityFromDb = () => {
	const cityList = JSON.stringify(db);
	const res = JSON.parse(cityList);

	return res[Math.floor(Math.random() * res.length)].name;
};
