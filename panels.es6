import debounce from 'lodash.debounce';
import getPanelWidth from './get-panel-width';
import React, { Children, cloneElement, Component } from 'react';

const hideScrollbars = <style>{'.Panel::-webkit-scrollbar { width: 0 !important; }'}</style>;

const style = {
  flexDirection: 'row',
  WebkitFlexDirection: 'row',
  height: '100vh',
  minWidth: '100vw',
  overflowY: 'hidden'
};

const UPDATE_PANEL_WIDTH_INTERVAL = 50;

export default class Panels extends Component {
  constructor(props) {
    super(props);

    this.state = {
      width: getPanelWidth()
    }
  }

  componentWillMount() {
    this.updatePanelWidth = debounce(() =>
      this.setState({width: getPanelWidth()}), UPDATE_PANEL_WIDTH_INTERVAL);
    window.addEventListener('resize', this.updatePanelWidth, false);
    window.addEventListener('orientationchange', this.updatePanelWidth, false);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updatePanelWidth);
    window.removeEventListener('orientationchange', this.updatePanelWidth);
  }

  render() {
    const { children } = this.props;
    const { width } = this.state;

    return (
      <div style={style}>
        {hideScrollbars}
        {Children.map(children, child => cloneElement(child, {width}))}
      </div>
    );
  }
}
