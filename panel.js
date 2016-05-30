import React, { Component } from 'react';

class Panel extends Component {
  render() {
    const { children, style, ...props } = this.props;

    return (
      <div {...props}
        ref={ $e => this.$e = $e }
        className='panel'
        style={{ overflowY: 'auto', ...style }}
      >
        {children}
      </div>
    );
  }
}
export default Panel;

const style = {
  overflowY: 'auto'
};
