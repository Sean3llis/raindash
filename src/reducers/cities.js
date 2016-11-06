'use strict';
import * as ACTN from '../actions/index';
import weatherParser from '../helpers/weatherParser';

export default function(cities = [], action) {
  switch (action.type) {

    case ACTN.RECEIVED_WEATHER:
      var newCity = weatherParser(action.payload);
      var oldState = cities.filter(city => {
        if (city.id === newCity.id) newCity.saved = city.saved;
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

    case ACTN.TOGGLE_CITY:
      var offlineCities = JSON.parse(localStorage.getItem('cities')) || [];
      const ID = action.payload.id;
      var newState = cities.map(city => {
        if (city.id == ID) {
          city.saved = !city.saved;
        }
        return city;
      });
      var newOfflineCities = newState.filter(city => city.saved);
      localStorage.setItem('cities', JSON.stringify(newOfflineCities));
      return newState;
    default:
      var savedCities = _.uniqBy(JSON.parse(localStorage.getItem('cities')), 'id');
      return (savedCities)
        ? savedCities
        : cities;
  }

}
