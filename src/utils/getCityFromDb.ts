import db from "../db/city.list.json";

export const getCityFromDb = (searchCity: string) => {
	const cityList = JSON.stringify(db);
	const res = JSON.parse(cityList);
	//   @ts-ignore
	const tmp = res.filter((city) => {
		return city.name.includes(searchCity);
	});
	return tmp;
};
