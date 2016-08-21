'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import Chart from '../components/weather-chart';

class WeatherList extends Component {
  constructor(props) {
    super(props);
    this.emptyTable = this.emptyTable.bind(this);
  }

  renderWeather(data) {
    const name = data.city.name;
    const temps = data.list.map(weather => weather.main.temp);
    const pressures = data.list.map(weather => weather.main.pressure);
    const humidities = data.list.map(weather => weather.main.humidity);
    const color = '#1e2f41';
    return (
      <div className="row city-row card" key={data.city.id}>
        <div className="col-sm-12">
          <div className="progress">
            <div className="progress-bar progress-bar-danger" style={{width: '80%'}}></div>
          </div>
        </div>
        <div className="col-sm-4">
          <h2>{data.city.name}</h2>
          <hr/>
          <span className="city-degrees">{_.round(data.list[0].main.temp)}°</span>
        </div>
        <div className="col-sm-4"><Chart data={temps} color={color} units="(F)" /></div>
        <div className="col-sm-4"><Chart data={humidities} color={color} units="(%)" /></div>
        <div className="clearfix"></div>
      </div>
    );
  }

  emptyTable() {
    return (
      <div id="weather-list" className="no-weather">
        <div className="block">
          <div className="row city-header card">
            <div className="col-sm-12">a</div>
            <div className="clearfix"></div>
          </div>
          <div className="row empty-row city-row card">
            <div className="col-sm-12">
              <div className="progress">
                <div className="progress-bar progress-bar-danger" style={{width: '80%'}}></div>
              </div>
            </div>
            <div className="col-sm-4">
              <h2>           </h2>
              <hr/>
              <span className="city-degrees">80°</span>
            </div>
            <div className="col-sm-4"></div>
            <div className="col-sm-4"></div>
            <div className="clearfix"></div>
          </div>
        </div>
      </div>
    );
  }

  render() {
    if (this.props.weather.length === 0) {
      return this.emptyTable();
    } else {
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
            {this.props.weather.map(this.renderWeather)}
            </div>
          </div>
        </div>
      );
    }
  }
}

function mapStateToProps({ weather }) {
  return { weather };
}

export default connect(mapStateToProps)(WeatherList);
