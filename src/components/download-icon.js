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
  return (
    <div className="download-icon-container" onClick={ props.onClick }>
      <svg style={activeStyle} className="download-icon" x="0px" y="0px" viewBox="0 0 53.867 53.867">
        <polygon  points="26.934,1.318 35.256,18.182 53.867,20.887 40.4,34.013 43.579,52.549 26.934,43.798 10.288,52.549 13.467,34.013 0,20.887 18.611,18.182 "/>
      </svg>
      <svg style={inactiveStyle} className="download-icon" x="0px" y="0px" viewBox="0 0 53.867 53.867">
        <polygon points="26.934,1.318 35.256,18.182 53.867,20.887 40.4,34.013 43.579,52.549 26.934,43.798 10.288,52.549 13.467,34.013 0,20.887 18.611,18.182 "/>
      </svg>
    </div>
  );
}
