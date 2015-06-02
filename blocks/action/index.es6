import baseStyle from './style';
import React from 'react';

export default class ActionBlock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false
    };
  }

  onClick(event) {
    if (this.props.flux && this.props.flux.navigate) {
      event.preventDefault();
      this.props.flux.navigate(this.props.href);
    }
  }

  render() {
    const active = this.props.active || this.state.hover ||
      (this.props.flux && this.props.flux.nextUri() === this.props.href);
    let style = {...baseStyle, ...this.props.style.base};
    if (active) {
      style = {...style, ...this.props.style.active};
    }

    let children;
    if (this.props.children) {
      children = React.Children.map(this.props.children, child => React.cloneElement(child, {active}));
    }

    return (
      <a href={this.props.href} title={this.props.title} style={style}
        onClick={this.onClick.bind(this)}
        onMouseEnter={() => this.setState({hover: true})}
        onMouseLeave={() => this.setState({hover: false})}>

        {children || this.props.title}
      </a>
    );
  }

  static propTypes = {
    active: React.PropTypes.bool,
    href: React.PropTypes.string.isRequired,
    flux: React.PropTypes.object,
    style:  React.PropTypes.object,
    title: React.PropTypes.string
  }

  static defaultProps = {
    active: false,
    style: {
      base: {},
      active: {}
    }
  }
}


