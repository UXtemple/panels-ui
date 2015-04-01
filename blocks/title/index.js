import baseStyle from './style'
import React from 'react'

export default class TitleBlock extends React.Component {
  render() {
    return <h1 style={{...baseStyle, ...this.props.style}}>{this.props.children || this.props.title}</h1>
  }
}

TitleBlock.propTypes = {
  style: React.PropTypes.object,
  subtitle: React.PropTypes.string
}
