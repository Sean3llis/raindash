'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import Chart from '../components/weather-chart';

class WeatherList extends Component {
  renderWeather(data) {
    const name = data.city.name;
    const temps = data.list.map(weather => weather.main.temp);
    const pressures = data.list.map(weather => weather.main.pressure);
    const humidities = data.list.map(weather => weather.main.humidity);
    const color = '#2C3E50';
    return (
      <tr key={data.city.id}>
        <td>{data.city.name}</td>
        <td><Chart data={temps} color={color} units="(F)" /></td>
        <td><Chart data={pressures} color={color} units="(hPA)" /></td>
        <td><Chart data={humidities} color={color} units="(%)" /></td>
      </tr>
    );
  }
  render() {
    return (
      <div id="weather-list">
      <div className="block">
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temp (F)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
      </div>
      </div>
    );
  }
}

function mapStateToProps({ weather }) {
  return { weather };
}

export default connect(mapStateToProps)(WeatherList);
