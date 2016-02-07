import normaliseUri from 'panels-normalise-uri';
import React, { Component, PropTypes } from 'react';
import toCSS from 'style-to-css';
import uniqueId from 'mini-unique-id';

export default class Teleport extends Component {
  render() {
    const { context, props } = this;
    const active = context.isActive(props.to, props.loose);
    const className = `Teleport-${uniqueId()}`;
    const href = normaliseUri(`${context.route.context}${props.to}`);

    const inlineStyle = props.styleHover ? `.${className}:hover {${toCSS(props.styleHover)}}` : '';
    const style = active ? {
      ...props.style,
      ...props.styleActive
    } : props.style;

    function onClick(event) {
      event.preventDefault();
      context.navigate(props.to);

      if (typeof props.onClick === 'function') {
        props.onClick();
      }
    }

    return (
      <a className={className} href={href} onClick={onClick} style={style} title={props.title}>
        {props.children}
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
