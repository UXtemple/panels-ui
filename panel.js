import React, { Component, PropTypes } from 'react';

export default class Panel extends Component {
  render() {
    const { props } = this;

    return (
      <div
        ref={props._ref}
        style={{
          height: '100%',
          overflowY: 'auto',
          ...props.style
        }}
      >
        {props.children}
      </div>
    );
  }
}
Panel.propTypes = {
  _ref: PropTypes.func,
  style: PropTypes.object
};
