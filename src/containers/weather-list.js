'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
/**
 * ACTIONS
 */
import { toggleSave, closeCity } from '../actions/index';

/**
 * COMPONENTS
 */
import CityRow from '../components/city-row';

class WeatherList extends Component {
  constructor(props) {
    super(props);
    this.createRow = this.createRow.bind(this);
  }

  createRow(city) {
    return (
      <CityRow
        onToggleSave={this.props.onToggleSave}
        onClose={this.props.onClose}
        key={city.id}
        data={city} />
    );
  }

  render() {
    if (this.props.cities.length) {
      return (
        <div id="weather-list">
          <div className="block">
            {this.props.cities.map(this.createRow)}
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

const mapDispatchToProps = dispatch => {
  return {
    onToggleSave: cityID => { dispatch( toggleSave(cityID) )},
    onClose: cityID => { dispatch( closeCity(cityID) )},
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(WeatherList);
