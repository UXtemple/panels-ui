import * as baseStyle from './style';
import React from 'react';

export default class ActionBlock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false
    };
  }

  onClick(event) {
    if (this.props.panels && this.props.panels.navigate) {
      event.preventDefault();
      this.props.panels.navigate(this.props.href);
    }
  }

  render() {
    let style = {...baseStyle.base, ...this.props.style.base};
    if (this.props.active || this.state.hover) {
      style = {...style, ...baseStyle.active, ...this.props.style.active};
    }

    return (
      <a href={this.props.href} title={this.props.title} style={style}
        onClick={this.onClick.bind(this)}
        onMouseEnter={() => this.setState({hover: true})}
        onMouseLeave={() => this.setState({hover: false})}>

        {this.props.children || this.props.title}
      </a>
    );
  }
}

ActionBlock.propTypes = {
  active: React.PropTypes.bool,
  href: React.PropTypes.string.isRequired,
  panels: React.PropTypes.object,
  style:  React.PropTypes.object,
  title: React.PropTypes.string
}

ActionBlock.defaultProps = {
  active: false,
  style: {
    base: {},
    active: {}
  }
}
