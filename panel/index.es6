import baseStyle from './style'
import React from 'react'

export default class Panel extends React.Component {
  render() {
    return <div style={{...baseStyle, ...this.props.style}}>{this.props.children}</div>;
  }
}