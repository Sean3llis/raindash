import { combineReducers } from 'redux';
import citiesReducer from './cities';
import * as ACTN from '../actions/index';


const rootReducer = combineReducers({
  cities: citiesReducer,
  requestingWeather: (state = false, action) => {
    if (action.type === ACTN.REQUESTING_WEATHER) {
      return action.payload;
    } else {
      return state;
    }
  }
});

export default rootReducer;
