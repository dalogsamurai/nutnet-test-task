const api = {
	base: "https://api.openweathermap.org/data/2.5/",
	key: "0788ded5532cb0909db3ff52e59d88eb",
};

export const searchByCityAPI = async (city: string) => {
	return await fetch(
		`${api.base}weather?q=${city}&appid=${api.key}&units=metric&lang=ru`,
	).then((res) => res.json());
};

export const getAllCitiesAPI = async () => {
	return await fetch("https://countriesnow.space/api/v0.1/countries").then(
		(res) => res.json(),
	);
};
