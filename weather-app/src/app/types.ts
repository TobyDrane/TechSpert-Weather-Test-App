export type SingleWeatherData = {
  id: number,
  name: string,
  coord: {
    lat: number,
    lon: number,
  },
  main: {
    temp: number,
    pressure: number,
    humidity: number,
    temp_min: number,
    temp_max: number,
  },
  dt: number,
  wind: {
    speed: number,
    deg: number,
  },
  clouds: {
    all: number,
  },
  weather: [
    {
      id: number,
      main: string,
      description: string,
      icon: string,
    }
  ],
};

export type WeatherResponse = {
  list: SingleWeatherData[],
};

export type Pagnation = {
  rows: number,
  currentPage: number,
};
