import Radium from 'radium';
import React, { PropTypes } from 'react';

const style = {
  flexDirection: 'row',
  height: '100vh',
  minWidth: '100vw',
  overflowY: 'hidden'
};

@Radium
export default class Panels {
  render() {
    return <div style={style}>{this.props.children}</div>;
  }

  static propTypes = {
    center: PropTypes.bool
  }
}
