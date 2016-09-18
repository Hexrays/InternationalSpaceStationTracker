import React from 'react';

const DOT_WIDTH = 3;
const DOT_HEIGHT = 3;

const style = {
  position        : 'absolute',
  width           : DOT_WIDTH,
  height          : DOT_HEIGHT,
  left            : -DOT_WIDTH / 2,
  top             : -DOT_HEIGHT / 2,

  borderRadius    : DOT_HEIGHT,
  backgroundColor : 'red',
  textAlign       : 'center',
};

const Marker = (props) => (
  <div key={props.key} style={style}></div>
);

export default Marker;