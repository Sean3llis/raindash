'use strict';
import axios from 'axios';

import API_KEY from '../../private.js';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}&units=imperial`;
export const FETCH_WEATHER = 'FETCH_WEATHER';
export const REQUESTING_WEATHER = 'REQUESTING_WEATHER';
export const RECEIVED_WEATHER = 'RECEIVED_WEATHER';
export const SAVE_CITY = 'SAVE_CITY';
export const CLOSE_CITY = 'CLOSE_CITY';

const receivedWeather = json => {
  return {
    type: RECEIVED_WEATHER,
    payload: json
  }
}

export const fetchWeather = city => dispatch => {
  dispatch({ type: REQUESTING_WEATHER });
  const url = `${ROOT_URL}&q=${city},us`;
    return fetch(url)
      .then(response => response.json())
      .then(json => {
        dispatch(receivedWeather(json))
      });
};

export function saveCity(id) {
  return {
    type: SAVE_CITY,
    payload: { id }
  }
};

export function closeCity(id) {
  return {
    type: CLOSE_CITY,
    payload: { id }
  }
};
