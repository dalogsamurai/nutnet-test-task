export interface IWeather {
  name: string;
  id: number;
  main: {
    pressure: number;
    temp: number;
  };
  sys: {
    sunset: number;
  };
  weather: [
    {
      description: string;
      main: string;
    }
  ];
}
