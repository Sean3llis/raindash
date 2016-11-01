import React from 'react';

export default props => {
  const activeStyle = {
    fill: '#EFCE4A'
  };
  const inactiveStyle = {
    fill: 'none',
    stroke: '#EFCE4A',
    strokeWidth: '4px',
    right: '80px'
  };
  const active = (<i className="fa fa-star save-icon icon"></i>);
  const inactive = (<i className="fa fa-star-o save-icon icon"></i>);
  return (props.active) ?
    active :
    inactive;
}
