import baseStyle from './style';
import React from 'react';

export default class TextBlock extends React.Component {
  render() {
    return <p style={{...baseStyle, ...this.props.style}}>{this.props.children || this.props.text}</p>;
  }
}

TextBlock.propTypes = {
  text: React.PropTypes.string,
  style:  React.PropTypes.object
}
