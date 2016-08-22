'use strict';

import React, { Component } from 'react';
import { Motion, spring } from 'react-motion';
import { connect } from 'react-redux';
import _ from 'lodash';

import Chart from '../components/weather-chart';

class WeatherList extends Component {
  constructor(props) {
    super(props);
    this.renderWeather = this.renderWeather.bind(this);
  }

  renderTempBar(percent) {
    console.log('rendering');
    let style = {
      width: `${percent}%`
    };
    return (
      <div className="progress-wrapper">
        <div className="progress">
          {/* <Motion defaultStyle={{width: 0}} style={{width: `${percent}`}}>
          {val => {
            return <div className="progress-bar progress-bar-danger" style={val.width}></div>;
          }}
          </Motion> */}
          <Motion defaultStyle={{width: 0}} style={{width: percent * 100}}>
            {value => <div className="progress-bar progress-bar-danger" style={{width: `${value.width}%`}}></div>}
          </Motion>
        </div>
      </div>
    );
  }

  renderWeather(data) {
    const name = data.city.name;
    const temps = data.list.map(weather => weather.main.temp);
    const avgTemp = temps.reduce((previous, current) => previous + current, 0) / temps.length;
    const maxTemp = Math.max(...temps);
    const minTemp = Math.min(...temps);
    const currentTemp = data.list[0].main.temp;
    const pressures = data.list.map(weather => weather.main.pressure);
    const humidities = data.list.map(weather => weather.main.humidity);
    const color = '#1e2f41';
    return (
      <div className="row city-row card" key={data.city.id}>
        <div className="col-sm-12">
          <h4>average low/average high</h4>
          {this.renderTempBar(currentTemp/maxTemp)}
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
            {this.props.weather.map(this.renderWeather)}
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

function mapStateToProps({ weather }) {
  return { weather };
}

export default connect(mapStateToProps)(WeatherList);
