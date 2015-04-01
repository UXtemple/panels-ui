import baseStyle from './style'
import React from 'react'

export default class SubtitleBlock extends React.Component {
  render() {
    return <h2 style={{...baseStyle, ...this.props.style}}>{this.props.children || this.props.subtitle}</h2>
  }
}

SubtitleBlock.propTypes = {
  style: React.PropTypes.object,
  subtitle: React.PropTypes.string
}
