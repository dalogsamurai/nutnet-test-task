import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { searchByCity } from "../../api/requests";
import { IWeather } from "../../types/IWeather";

const CityPage = () => {
  const { slug } = useParams();
  const [cityData, setCityData] = useState<IWeather>();

  const getData = async () => {
    if (slug) {
      const searchByCityRes = await searchByCity(slug);
      console.log(searchByCityRes);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return <main className="city-page">{slug}</main>;
};

export default CityPage;
