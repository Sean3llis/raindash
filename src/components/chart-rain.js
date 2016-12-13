'use strict';
import _ from 'lodash';
import React from 'react';
import { Sparklines, SparklinesLine, SparklinesNormalBand } from 'react-sparklines';

const avg = data => _.round(_.sum(data)/data.length);
const max = data => _.round(_.max(data));
const min = data => _.round(_.min(data));

export default props => {
  const {rains, hasRain, maxRain, minRain} = props.data;
  const height = props.height || 100;
  if (hasRain) {
    return (
      <div className="rain-chart">
        <div className="legend legend-rain max">{`${maxRain}`}&quot;</div>
        <div className="legend legend-rain min">{`${minRain}`}&quot;</div>
        <div className="legend rain-key">Inches of Rainfall</div>
        <Sparklines height={100} margin={20} data={rains}>
          <SparklinesLine style={{ fill: "#66ccc1", fillOpacity: 0.85, stroke: 'none' }}/>
        </Sparklines>
      </div>
    );
  } else {
    return (<div className="rain-chart"></div>)
  }
}
