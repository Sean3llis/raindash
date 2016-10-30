'use strict';

export default (rawData) => {
  const city = rawData.city;
  const name = city.name;
  const temps = rawData.list.map(weather => weather.main.temp);
  const avgTemp = temps.reduce((previous, current) => previous + current, 0) / temps.length;
  const maxTemp = Math.max(...temps);
  const minTemp = Math.min(...temps);
  const currentTemp = rawData.list[0].main.temp;
  const humidities = rawData.list.map(weather => weather.main.humidity);
  return {
    city,
    name,
    temps,
    humidities,
    avgTemp,
    maxTemp,
    minTemp,
    currentTemp,
  }
}
