'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
/**
 * ACTIONS
 */
import starCity from '../actions/index';

/**
 * COMPONENTS
 */
import CityRow from '../components/city-row';

class WeatherList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.cities.length) {
      return (
        <div id="weather-list">
          <div className="block">
            <div>
              {this.props.cities.map(city => {
                return (
                  <CityRow
                    key={city.id}
                    data={city} />
                );
              })}
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div id="weather-list">
          enter a city to begin..
        </div>
      );
    }
  }
}

const mapStateToProps = state => {
  return state;
}

export default connect(mapStateToProps)(WeatherList);
