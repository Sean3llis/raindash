'use strict';
import * as actionMap from '../actions/index';
import weatherParser from '../helpers/weatherParser';

export default function(state = [], action) {
  switch (action.type) {
    case actionMap.RECEIVED_WEATHER:
      var newState = [weatherParser(action.payload), ...state];
      // localStorage.setItem('weather', JSON.stringify(newState));
      return newState;
  }
  var savedWeather = JSON.parse(localStorage.getItem('weather'));
  return savedWeather || state;
}
