import React, { Component, PropTypes } from 'react';
import { render, unmountComponentAtNode } from 'react-dom';

class Wrapper extends Component {
  constructor(wProps) {
    super(wProps);
    this.state = wProps.state;
  }

  componentDidMount() {
    this.props.onChange(nextState => this.setState(nextState));
  }

  getChildContext() {
    const {
      isActive, isContext, isFocus, navigate, panel, route, routeIndex, router, toggleExpand,
      updateSettings
    } = this.state;

    return {
      isActive,
      isContext,
      isFocus,
      navigate,
      panel,
      route,
      routeIndex,
      router,
      toggleExpand,
      updateSettings
    };
  }

  render() {
    const WrappedComponent = this.props.component;
    return <WrappedComponent {...this.state.panel.props} mountedRef={this.props.mountedRef} panels={this.state} />;
  }
}
Wrapper.propTypes = {
  onChange: PropTypes.func.isRequired,
  mountedRef: PropTypes.any.isRequired,
  state: PropTypes.object.isRequired
};
const routeShape = PropTypes.shape({
  app: PropTypes.string.isRequired,
  context: PropTypes.string.isRequired,
  panelId: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  isVisible: PropTypes.bool.isRequired,
  width: PropTypes.number.isRequired
});
Wrapper.childContextTypes = {
  isActive: PropTypes.func.isRequired,
  isContext: PropTypes.bool,
  isFocus: PropTypes.bool,
  navigate: PropTypes.func.isRequired,
  panel: PropTypes.object.isRequired,
  route: routeShape.isRequired,
  routeIndex: PropTypes.number.isRequired,
  router: PropTypes.shape({
    routes: PropTypes.shape({
      byContext: PropTypes.objectOf(routeShape),
      items: PropTypes.arrayOf(PropTypes.string)
    }),
    uri: PropTypes.string.isRequired
  }),
  toggleExpand: PropTypes.func.isRequired,
  updateSettings: PropTypes.func.isRequired
};

const wrap = WrappedComponent => ($el, props, onChange) => {
  render(<Wrapper component={WrappedComponent} onChange={onChange} mountedRef={$el} state={props} />, $el);
  return () => unmountComponentAtNode($el);
};
export default wrap;
