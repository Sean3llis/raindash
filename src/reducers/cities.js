'use strict';
import * as ACTN from '../actions/index';
import weatherParser from '../helpers/weatherParser';

export default function(cities = [], action) {
  switch (action.type) {

    case ACTN.RECEIVED_WEATHER:
      var newCity = weatherParser(action.payload);
      var oldState = cities.filter(city => {
        return city.id !== newCity.id;
      });
      var newState = [newCity, ...oldState];
      return newState;

    case ACTN.CLOSE_CITY:
      var ID = action.payload.id;
      var newState = cities.filter(city => {
        return city.id !== ID;
      });
      return newState;

    case ACTN.SAVE_CITY:
      var ID = action.payload.id;
      var offlineCities = JSON.parse(localStorage.getItem('cities')) || [];
      var newState = cities.map(city => {
        if (city.id === ID) {
          city.saved = true
          offlineCities.push(city);
        };
        return city;
      });
      localStorage.setItem('cities', JSON.stringify(offlineCities));
      return newState;
    default:
      var savedCities = JSON.parse(localStorage.getItem('cities'));
      return (savedCities)
        ? savedCities
        : cities;
  }

}
