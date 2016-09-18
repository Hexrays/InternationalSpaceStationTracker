import React, {PropTypes, Component} from 'react';

const K_WIDTH = 3;
const K_HEIGHT = 3;

const style = {
  // initially any map object has left top corner at lat lng coordinates
  // it's on you to set object origin to 0,0 coordinates
  position        : 'absolute',
  width           : K_WIDTH,
  height          : K_HEIGHT,
  left            : -K_WIDTH / 2,
  top             : -K_HEIGHT / 2,

  borderRadius    : K_HEIGHT,
  backgroundColor : 'red',
  textAlign       : 'center',
};

export default class Marker extends Component {
  static propTypes = {
    text: PropTypes.string
  };

  static defaultProps = {};

  render() {
    return (
       <div key={this.props.key} style={style}></div>
    );
  }
}