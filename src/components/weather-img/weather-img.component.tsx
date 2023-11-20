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
import "./weather-img.component.sass";

interface Props {
  weatherType: string;
}

const WeatherImg = ({ weatherType }: Props) => {
  return (
    <>
      {weatherType === "Clear" && (
        <img src={iClear} className="weather-img" alt="" />
      )}

      {weatherType === "Clouds" && (
        <img src={iClouds} className="weather-img" alt="" />
      )}

      {weatherType === "Drizzle" && (
        <img src={iDrizzle} className="weather-img" alt="" />
      )}

      {(weatherType === "Dust" ||
        weatherType === "Ash" ||
        weatherType === "Sand") && (
        <img src={iDustSandAsh} className="weather-img" alt="" />
      )}

      {(weatherType === "Mist" ||
        weatherType === "Smoke" ||
        weatherType === "Fog" ||
        weatherType === "Haze") && (
        <img src={iMistSmokeHazeFog} className="weather-img" alt="" />
      )}

      {weatherType === "Rain" && (
        <img src={iRain} className="weather-img" alt="" />
      )}

      {weatherType === "Snow" && (
        <img src={iSnow} className="weather-img" alt="" />
      )}

      {weatherType === "Squall" && (
        <img src={iSquall} className="weather-img" alt="" />
      )}

      {weatherType === "Thunderstorm" && (
        <img src={iThunderstorm} className="weather-img" alt="" />
      )}

      {weatherType === "Tornado" && (
        <img src={iTornado} className="weather-img" alt="" />
      )}
    </>
  );
};

export default WeatherImg;
