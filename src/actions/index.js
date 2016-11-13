'use strict';
import axios from 'axios';

// import API_KEY from '../../private';
const API_KEY = 'c7100b6f2600d083f8839495e834fe50';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}&units=imperial`;
export const FETCH_WEATHER = 'FETCH_WEATHER';
export const REQUESTING_WEATHER = 'REQUESTING_WEATHER';
export const RECEIVED_WEATHER = 'RECEIVED_WEATHER';
export const TOGGLE_CITY = 'TOGGLE_CITY';
export const CLOSE_CITY = 'CLOSE_CITY';

const receivedWeather = json => {
  return {
    type: RECEIVED_WEATHER,
    payload: json
  }
}

export const fetchWeather = city => dispatch => {
  const url = `${ROOT_URL}&q=${city},us`;
    return fetch(url)
      .then(response => response.json())
      .then(json => {
        dispatch(receivedWeather(json))
      });
};

export function toggleSave(id) {
  return {
    type: TOGGLE_CITY,
    payload: { id }
  }
};

export function closeCity(id) {
  return {
    type: CLOSE_CITY,
    payload: { id }
  }
};
