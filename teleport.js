import normaliseUri from 'panels-normalise-uri';
import React, { Component, PropTypes } from 'react';
import toCSS from 'style-to-css';
import uniqueId from 'mini-unique-id';

// NOTE Don't destruct this.context.
export default class Teleport extends Component {
  constructor(props) {
    super(props);
    this.id = uniqueId();
  }

  render() {
    const { context, children, focus, loose, onClick, style, styleActive, styleHover, title, to, ...rest } = this.props;
    const active = this.context.isActive(to, loose);
    const className = `Teleport-${this.id}`;
    const href = normaliseUri(`${this.context.route.context}${to}`);

    const inlineStyle = styleHover ? `.${className}:hover {${toCSS(styleHover)}}` : '';
    const finalStyle = active ? {
      ...style,
      ...styleActive
    } : style;

    const finalOnClick = event => {
      event.preventDefault();
      let preventNavigate = false;

      if (typeof onClick === 'function') {
        preventNavigate = onClick(event);
      }

      if (preventNavigate !== true) {
        this.context.navigate(to, focus, context);
      }
    }

    return (
      <a {...rest} className={className} href={href} onClick={finalOnClick} style={finalStyle} title={title}>
        {children}
        <style>
          {inlineStyle}
        </style>
      </a>
    );
  }
}
Teleport.contextTypes = {
  isActive: PropTypes.func.isRequired,
  navigate: PropTypes.func.isRequired,
  route: PropTypes.shape({
    app: PropTypes.string.isRequired,
    context: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired
  }).isRequired
};

Teleport.propTypes = {
  styleActive: PropTypes.object,
  styleHover: PropTypes.object,
  to: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  style: PropTypes.object,
  title: PropTypes.string
};
