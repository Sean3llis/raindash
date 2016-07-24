'use strict';
import _ from 'lodash';
import React from 'react';
import { Sparklines, SparklinesLine, SparklinesCurve, SparklinesSpots, SparklinesReferenceLine } from 'react-sparklines';

function average(data) {
  return _.round(_.sum(data)/data.length);
}

export default props => {
  return (
    <div>
      <Sparklines height={100} margin={20} data={props.data}>
        <SparklinesCurve style={{ strokeWidth: 2, stroke: "#F24B39", fill: "none" }} />
        <SparklinesSpots size={4} style={{ fill: "#F24B39" }} />
       <SparklinesReferenceLine type="mean" style={{ stroke: '#FFB041', strokeOpacity: 1, strokeWidth: 2, strokeDasharray: '3, 1' }} />
      </Sparklines>
      <div>Average: {average(props.data) + props.units}</div>
    </div>
  );
}
