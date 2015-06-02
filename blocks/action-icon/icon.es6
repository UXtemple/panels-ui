import React from 'react';

export default class Icon extends React.Component {
  render() {
    const Component = this.props.icon;

    return <Component {...this.props.style[this.props.active ? 'active' : 'base']} />;
  }

  static propTypes = {
    active: React.PropTypes.bool,
    icon: React.PropTypes.element.isRequired,
    style: React.PropTypes.shape({
      active: React.PropTypes.object,
      base: React.PropTypes.object
    })
  }

  static defaultProps = {
    style: {
      active: {},
      base: {}
    }
  }
}
