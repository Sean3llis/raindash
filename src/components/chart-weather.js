'use strict';
import _ from 'lodash';
import React from 'react';
import { Sparklines, SparklinesLine, SparklinesCurve, SparklinesSpots, SparklinesNormalBand, SparklinesReferenceLine } from 'react-sparklines';
import Grid from './grid';

const avg = data => _.round(_.sum(data)/data.length);
const max = data => _.round(_.max(data));
const min = data => _.round(_.min(data));

export default props => {
  return (
    <div className="chart-wrapper">
      <div className="legend legend-x now">0d</div>
      <div className="legend legend-x mid">2.5d</div>
      <div className="legend legend-x later">5d</div>
      <div className="legend legend-y max">{`${max(props.data)}${props.units}`}</div>
      <div className="legend legend-y min">{`${min(props.data)}${props.units}`}</div>
      <div className="legend chart-title">{props.title}</div>
      <Sparklines height={100} margin={20} data={props.data}>
        <SparklinesLine style={{ strokeWidth: 1, stroke: "#1e2f41", fill: "none" }} />
        <SparklinesSpots size={2} style={{ fill: "#ffffff", stroke: "#1e2f41", strokeWidth: 1 }} />
      </Sparklines>
      <Grid />
    </div>
  );
}
