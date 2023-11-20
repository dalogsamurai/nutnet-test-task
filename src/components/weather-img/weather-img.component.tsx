import iClear from "../../assets/clear.svg";
import iClouds from "../../assets/clouds.svg";
import iDrizzle from "../../assets/drizzle.svg";
import iDustSandAsh from "../../assets/dust-sand-ash.svg";
import iMistSmokeHazeFog from "../../assets/mist-smoke-haze-fog.svg";
import iRain from "../../assets/rain.svg";
import iSnow from "../../assets/snow.svg";
import iSquall from "../../assets/squall.svg";
import iThunderstorm from "../../assets/thunderstorm.svg";
import iTornado from "../../assets/tornado.svg";
import cn from "classnames";
import "./weather-img.component.sass";

interface Props {
	weatherType: string;
	isSmall?: boolean;
}

const WeatherImg = ({ weatherType, isSmall = false }: Props) => {
	return (
		<>
			{weatherType === "Clear" && (
				<img
					src={iClear}
					className={cn("weather-img", { _small: isSmall })}
					alt=""
				/>
			)}

			{weatherType === "Clouds" && (
				<img
					src={iClouds}
					className={cn("weather-img", { _small: isSmall })}
					alt=""
				/>
			)}

			{weatherType === "Drizzle" && (
				<img
					src={iDrizzle}
					className={cn("weather-img", { _small: isSmall })}
					alt=""
				/>
			)}

			{(weatherType === "Dust" ||
				weatherType === "Ash" ||
				weatherType === "Sand") && (
				<img
					src={iDustSandAsh}
					className={cn("weather-img", { _small: isSmall })}
					alt=""
				/>
			)}

			{(weatherType === "Mist" ||
				weatherType === "Smoke" ||
				weatherType === "Fog" ||
				weatherType === "Haze") && (
				<img
					src={iMistSmokeHazeFog}
					className={cn("weather-img", { _small: isSmall })}
					alt=""
				/>
			)}

			{weatherType === "Rain" && (
				<img
					src={iRain}
					className={cn("weather-img", { _small: isSmall })}
					alt=""
				/>
			)}

			{weatherType === "Snow" && (
				<img
					src={iSnow}
					className={cn("weather-img", { _small: isSmall })}
					alt=""
				/>
			)}

			{weatherType === "Squall" && (
				<img
					src={iSquall}
					className={cn("weather-img", { _small: isSmall })}
					alt=""
				/>
			)}

			{weatherType === "Thunderstorm" && (
				<img
					src={iThunderstorm}
					className={cn("weather-img", { _small: isSmall })}
					alt=""
				/>
			)}

			{weatherType === "Tornado" && (
				<img
					src={iTornado}
					className={cn("weather-img", { _small: isSmall })}
					alt=""
				/>
			)}
		</>
	);
};

export default WeatherImg;
