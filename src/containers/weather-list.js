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
    this.mapCityRows = this.mapCityRows.bind(this);
  }


  mapCityRows(rowData) {
    return <CityRow key={rowData.city.id} data={rowData} color={'#1e2f41'} />;
  }

  render() {
    if (this.props.weather.length) {
      return (
        <div id="weather-list">
          <div className="block">
            <div className="row city-header card">
              <div className="col-sm-4">Current</div>
              <div className="col-sm-4">Temp <span className="label label-default">°F</span></div>
              <div className="col-sm-4">Humidity <span className="label label-default">%</span></div>
              <div className="clearfix"></div>
            </div>
            <div>
              {this.props.weather.map(this.mapCityRows)}
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
