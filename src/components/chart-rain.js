'use strict';
import _ from 'lodash';
import React from 'react';
import { Sparklines, SparklinesLine, SparklinesBars, SparklinesCurve, SparklinesSpots, SparklinesReferenceLine } from 'react-sparklines';

const avg = data => _.round(_.sum(data)/data.length);
const max = data => _.round(_.max(data));
const min = data => _.round(_.min(data));

export default props => {
  if (props.hasRain) {
    return (
      <div className="rain-chart">
        <Sparklines height={100} margin={20} data={props.data}>
          <SparklinesLine style={{ fill: "#66ccc1", fillOpacity: 1, stroke: 'none' }}/>
        </Sparklines>
      </div>
    );
  } else {
    return (<div className="rain-chart"></div>)
  }
}
