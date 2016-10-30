'use strict';

import React from 'react';
import { Motion, spring } from 'react-motion';


import DownloadIcon from '../components/download-icon';
import Chart from '../components/weather-chart';


const renderTempBar = percent => {
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
}

export default props => {
  const { data, color } = props
  return (
    <div className="row city-row card">
      <DownloadIcon onClick={() => console.log('click')}/>
      <div className="col-sm-4">
        <h2>{data.name}</h2>
        <hr/>
        <span className="city-degrees">{_.round(data.currentTemp)}°</span>
        {renderTempBar(data.currentTemp/data.maxTemp)}
      </div>
      <div className="col-sm-4"><Chart data={data.temps} color={color} units="(F)" /></div>
      <div className="col-sm-4"><Chart data={data.humidities} color={color} units="(%)" /></div>
      <div className="clearfix"></div>
    </div>
  );
}
