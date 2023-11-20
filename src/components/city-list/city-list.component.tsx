import { useEffect, useState } from "react";
import { getCitiesFromLS } from "../../utils/localStorageActions";
import CityCard from "../city-card/city-card.component";
import "./city-list.component.sass";

const CityList = () => {
  const [citiesList, setCitiesList] = useState<string[]>();

  useEffect(() => {
    const citiesListFromLS = getCitiesFromLS();

    if (citiesListFromLS) {
      setCitiesList(citiesListFromLS);
    }
  });

  return (
    <section className="city-list">
      {citiesList?.map((city) => (
        <CityCard slug={city} />
      ))}
    </section>
  );
};

export default CityList;
