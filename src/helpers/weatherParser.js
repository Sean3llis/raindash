'use strict';

export default (rawData) => {
  const city = rawData.city;
  const name = city.name;
  const id = city.id;
  let temps = [];
  let humidities = [];
  let rains = [];
  let hasRain = false;
  rawData.list.map(weather => {
    temps.push(weather.main.temp);
    humidities.push(weather.main.temp);
    rains.push((weather.rain && weather.rain['3h']) ? weather.rain['3h'] : 0);
  });
  const maxTemp = Math.max(...temps);
  const minTemp = Math.min(...temps);
  const avgTemp = (temps.reduce((p, c) => p + c), 0) / temps.length;
  const maxRain = Math.max(...rains);
  const minRain = Math.min(...rains);
  const currentTemp = temps[0];
  if (maxRain > 0) hasRain = true;

  return {
    id,
    city,
    name,
    temps,
    humidities,
    avgTemp,
    maxTemp,
    minTemp,
    currentTemp,
    rains,
    hasRain,
    maxRain,
    minRain,
  };
}
