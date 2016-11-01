'use strict';
import * as actionMap from '../actions/index';
import weatherParser from '../helpers/weatherParser';

export default function(state = [], action) {
  switch (action.type) {
    case actionMap.RECEIVED_WEATHER:
      let newCity = weatherParser(action.payload);
      let oldState = state.filter(city => {
        return city.id !== newCity.id;
      });
      let newState = [newCity, ...oldState];
      // localStorage.setItem('cities', JSON.stringify(newState));
      return newState;
  }
  var cities = JSON.parse(localStorage.getItem('cities'));
  return cities || state;
}
