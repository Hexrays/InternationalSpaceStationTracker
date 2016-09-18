import React from 'react';

const DOT_WIDTH = 3;
const DOT_HEIGHT = 3;

const ARR_WIDTH = 13;
const ARR_HEIGHT = 13;

const style = {
  position        : 'absolute',
  width           : DOT_WIDTH,
  height          : DOT_HEIGHT,
  left            : -DOT_WIDTH / 2,
  top             : -DOT_HEIGHT / 2,
  borderRadius    : DOT_HEIGHT,
  backgroundColor : 'lime',
};

const arrowStyle = (angle) => {
  return {
    position        : 'absolute',
    width           : ARR_WIDTH,
    height          : ARR_HEIGHT,
    right           : 0,
    top             : 0,
    borderTop       : '2px solid lime',
    borderRight     : '2px solid lime',
    transformOrigin : 'top right',
    transform       : `rotate(${angle-90}deg)`
  }
}

const Marker = ({key, degs}) => {
  if(degs) {
    return (
      <div className="map-marker" key={key} style={arrowStyle(-degs)}></div>
    );
  } else {
    return (
      <div className="map-marker" key={key} style={style}></div>
    );
  }
};

export default Marker;
