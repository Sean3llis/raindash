import React from 'react';

export default props => {
  const squareUnit = 12;
  return (
    <svg className="grid" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="400px" height="300px">
      <defs>
        <pattern id="grid-pattern" width={squareUnit} height={squareUnit} patternUnits="userSpaceOnUse">
          <path d="M 0 0 L 12 0 12 12 0 12 z" stroke="#f5f5f5" strokeWidth="1" fill="none"></path>
        </pattern>
      </defs>
      <rect fill="url(#grid-pattern)" height="100%" width="100%" y="2" x="10" />
    </svg>
  );
}
