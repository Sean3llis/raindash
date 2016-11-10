'use strict';

export default (rawData) => {
  const city = rawData.city;
  const name = city.name;
  const id = city.id;
  const temps = rawData.list.map(weather => weather.main.temp);
  const avgTemp = temps.reduce((previous, current) => previous + current, 0) / temps.length;
  const maxTemp = Math.max(...temps);
  const minTemp = Math.min(...temps);
  const currentTemp = rawData.list[0].main.temp;
  const humidities = rawData.list.map(weather => weather.main.humidity);
  const rains = [];
  var hasRain = false;
  rawData.list.map(d => {
    if (d.rain && d.rain['3h']) {
      rains.push(d.rain['3h']);
      hasRain = true;
    } else {
      rains.push(0);
    }
  });
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
    hasRain
  };
}
