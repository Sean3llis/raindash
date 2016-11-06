'use strict';
import _ from 'lodash';
import React from 'react';
import { Sparklines, SparklinesLine, SparklinesCurve, SparklinesSpots, SparklinesReferenceLine } from 'react-sparklines';

function average(data) {
  return _.round(_.sum(data)/data.length);
}

const avg = data => _.round(_.sum(data)/data.length);
const max = data => _.round(_.max(data));
const min = data => _.round(_.min(data));

export default props => {
  return (
    <div className="chart-wrapper">
      <div className="legend legend-x now">0d</div>
      <div className="legend legend-x mid">2.5d</div>
      <div className="legend legend-x later">5d</div>
      <div className="legend legend-y max">{max(props.data)}°</div>
      <div className="legend legend-y min">{min(props.data)}°</div>
      <Sparklines height={100} margin={20} data={props.data}>
        <SparklinesReferenceLine type="max" style={{ stroke: '#F5F5F5', strokeOpacity: 1, strokeWidth: 1, strokeDasharray: '1, 1' }} />
        <SparklinesReferenceLine type="mean" style={{ stroke: '#F5F5F5', strokeOpacity: 1, strokeWidth: 1, strokeDasharray: '1, 1' }} />
        <SparklinesLine style={{ strokeWidth: 1, stroke: "#1e2f41", fill: "none" }} />
        <SparklinesSpots size={2} style={{ fill: "#F24B39" }} />
      </Sparklines>
    </div>
  );
}
