import * as baseStyle from './style';
import React from 'react';

export default class ActionBlock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      hover: false
    };
  }

  onClick(event) {
    event.preventDefault();
    this.setState({active: !this.state.active});
  }

  render() {
    let style = {...baseStyle.base, ...this.props.style.base};
    if (this.state.active || this.state.hover) {
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
  href: React.PropTypes.string.isRequired,
  title: React.PropTypes.string,
  style:  React.PropTypes.object
}

ActionBlock.defaultProps = {
  style: {
    base: {},
    active: {}
  }
}
