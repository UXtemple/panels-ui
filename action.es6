import normalizeUri from 'panels-normalize-uri';
import React, { Component, PropTypes } from 'react';

function isFunction(fn) {
  return typeof fn === 'function';
}

export default class Action extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hover: false
    };
  }

  onClick(event) {
    event.preventDefault();
    this.context.navigate(this.props.href);

    if (isFunction(this.props.onClick)) {
      this.props.onClick();
    }
  }

  onMouseEnter() { this.setState({hover: true}) }
  onMouseLeave() { this.setState({hover: false}) }

  render() {
    const { activeStyle, children, hoverStyle, href, loose, style, title } = this.props;
    const { hover } = this.state;
    const active = this.context.isActive(href, loose);
    const finalHref = normalizeUri(`${this.context.route.context}${href}`);

    let finalStyle = {
      WebkitBoxOrient: 'horizontal',
      WebkitBoxDirection: 'normal',
      WebkitFlexDirection: 'row',
      msFlexDirection: 'row',
      flexDirection: 'row',
      textDecoration: 'none',
      ...style
    };

    if (active) {
      finalStyle = {
        ...finalStyle,
        ...activeStyle
      }
    }

    if (hover) {
      finalStyle = {
        ...finalStyle,
        ...hoverStyle
      }
    }

    const content = children ?
      (isFunction(children) ? children(active, hover) : children) :
      title;

    return (
      <a href={finalHref} title={title} style={finalStyle} onClick={::this.onClick}
        onMouseEnter={::this.onMouseEnter} onMouseLeave={::this.onMouseLeave}>
        {content}
      </a>
    );
  }
}
Action.contextTypes = {
  isActive: PropTypes.func.isRequired,
  navigate: PropTypes.func.isRequired,
  route: PropTypes.shape({
    app: PropTypes.string.isRequired,
    context: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired
  }).isRequired
};

Action.defaultProps = {
  activeStyle: {},
  hoverStyle: {},
  style: {}
};

Action.propTypes = {
  activeStyle: PropTypes.object,
  hoverStyle: PropTypes.object,
  href: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  style: PropTypes.object,
  title: PropTypes.string
};
