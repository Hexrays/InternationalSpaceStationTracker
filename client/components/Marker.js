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

const latestStyle = {
  position        : 'absolute',
  width           : DOT_WIDTH * 2,
  height          : DOT_HEIGHT * 2,
  left            : -DOT_WIDTH,
  top             : -DOT_HEIGHT,
  borderRadius    : DOT_HEIGHT,
  backgroundColor : 'lime',
};

const Marker = ({key, latest}) => (
  <div className="map-marker" key={key} style={latest ? latestStyle : style}></div>
);

export default Marker;
