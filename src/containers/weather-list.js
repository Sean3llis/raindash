'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';

import Chart from '../components/weather-chart';

class WeatherList extends Component {
  renderWeather(data) {
    const name = data.city.name;
    const temps = data.list.map(weather => weather.main.temp);
    const pressures = data.list.map(weather => weather.main.pressure);
    const humidities = data.list.map(weather => weather.main.humidity);
    return (
      <tr key={data.city.id}>
        <td>{data.city.name}</td>
        <td><Chart data={temps} color="blue" /></td>
        <td><Chart data={pressures} color="green" /></td>
        <td><Chart data={humidities} color="black" /></td>
      </tr>
    );
  }
  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temp</th>
            <th>Pressure</th>
            <th>Humidity</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    );
  }
}

function mapStateToProps({ weather }) {
  return { weather };
}

export default connect(mapStateToProps)(WeatherList);
