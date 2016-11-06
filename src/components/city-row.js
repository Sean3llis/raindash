'use strict';

import React, { Component } from 'react';
import { Motion, spring } from 'react-motion';


import SaveIcon from '../components/save-icon';
import Chart from '../components/weather-chart';

class CityRow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      saved: false
    };
    this.renderTempBar = this.renderTempBar.bind(this);
  };

  renderTempBar(percent) {
    let style = {
      width: `${percent}%`
    };
    return (
      <div className="progress-wrapper">
        <div className="progress">
          <Motion defaultStyle={{width: 0}} style={{width: percent * 100}}>
            {value => <div className="progress-bar progress-bar-danger" style={{width: `${value.width}%`}}></div>}
          </Motion>
        </div>
      </div>
    );
  };

  render() {
    const ID = this.props.data.id;
    const data = this.props.data;
    const color = this.props.color;
    let closeIcon = (<i className="fa fa-close close-icon icon"></i>);
    let currentSaveIcon = (this.props.data.saved)
      ? (<i className="fa fa-star save-icon icon"></i>)
      : (<i className="fa fa-star-o save-icon icon"></i>);
    return (
      <div className="row city-row card">
        <div className="icon-wrapper">
          <span onClick={() => this.props.onClose(ID)}>{closeIcon}</span>
          <span onClick={() => this.props.onToggleSave(ID)}>{currentSaveIcon}</span>
        </div>
        <div className="col-sm-4">
          <h2>{data.name}</h2>
          <hr/>
          <span className="city-degrees">{_.round(data.currentTemp)}°</span>
          {this.renderTempBar(data.currentTemp/105)}
        </div>
        <div className="col-sm-4"><Chart data={data.temps} color={color} units="(F)" /></div>
        <div className="col-sm-4"><Chart data={data.humidities} color={color} units="(%)" /></div>
        <div className="clearfix"></div>
      </div>
    );
  };
}

export default CityRow;
