import DEFAULT_PANEL_WIDTH from './default-panel-width';
import React, { PropTypes } from 'react';

const baseStyle = {
  alignItems: 'flex-start',
  height: '100vh',
  MsOverflowStyle: 'none',
  overflowX: 'auto'
};

export default class Panel {
  render() {
    const { children, style, width } = this.props;
    const panelStyle = {
      ...baseStyle,
      ...style,
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
    ]).isRequired
  }
}
