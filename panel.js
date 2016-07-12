import React, { Component, PropTypes } from 'react';

export default class Panel extends Component {
  render() {
    const { children, style, ...props } = this.props;

    return (
      <div
        {...props}
        ref={$e => this.$e = $e}
        style={{
          height: '100%',
          overflowY: 'auto',
          ...style
        }}
      >
        {children}
      </div>
    );
  }
}
