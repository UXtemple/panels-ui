import baseStyle from './style'
import React from 'react'

export default class ImageTitle extends React.Component {
  render() {
    return <img src={this.props.src} style={{...baseStyle, ...this.props.style}} />
  }
}

ImageTitle.propTypes = {
  src: React.PropTypes.string.isRequired,
  style:  React.PropTypes.object
}
