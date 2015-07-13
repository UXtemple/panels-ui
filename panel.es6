import Radium from 'radium';
import React, { Component, PropTypes } from 'react';

const style = {
  alignItems: 'flex-start',
  height: '100vh',
  overflowX: 'auto',
  width: 360,
  '@media (max-width: 720px)': {
    maxWidth: 360,
    width: '100vw'
  },
  '@media (max-width: 320px)': {
    maxWidth: 320
  }
};

@Radium
export default class Panel extends Component {
  render() {
    return <div style={[style, this.props.style]}>{this.props.children}</div>;
  }

  static propTypes = {
    style: PropTypes.object
  }
}
