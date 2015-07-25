import DEFAULT_PANEL_WIDTH from './default-panel-width';
import React, { PropTypes } from 'react';

const style = {
  alignItems: 'flex-start',
  WebkitAlignItems: 'flex-start',
  height: '100vh',
  MsOverflowStyle: 'none',
  overflowX: 'auto'
};

export default class Panel {
  render() {
    const { children, width } = this.props;
    const panelStyle = {
      ...style,
      ...this.props.style,
      width
    };

    return <div className='Panel' style={panelStyle}>{children}</div>;
  }

  static defaultProps = {
    style: {},
    width: DEFAULT_PANEL_WIDTH
  }

  static propTypes = {
    style: PropTypes.object,
    width: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string
    ])
  }
}
