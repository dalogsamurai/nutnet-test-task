import { useParams } from "react-router-dom";

const CityPage = () => {
	const { slug } = useParams();

	return <main className="city-page" />;
};

export default CityPage;