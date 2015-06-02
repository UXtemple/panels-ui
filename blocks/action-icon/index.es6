import ActionBlock from '../action';
import Icon from './icon';
import React from 'react';

export default class ActionWithIconBlock extends React.Component {
  render() {
    const { icon, style, ...props } = this.props;

    return (
      <ActionBlock {...props} style={style.action}>
        {this.props.children}
        <Icon style={style.icon} icon={icon} />
      </ActionBlock>
    );
  }

  static propTypes = {
    active: React.PropTypes.bool,
    icon: React.PropTypes.element,
    href: React.PropTypes.string.isRequired,
    flux: React.PropTypes.object,
    style: React.PropTypes.shape({
      action: React.PropTypes.shape({
        active: React.PropTypes.object,
        base: React.PropTypes.object
      }),
      icon: React.PropTypes.shape({
        active: React.PropTypes.object,
        base: React.PropTypes.object
      })
    }),
    title: React.PropTypes.string
  }

  static defaultProps = {
    active: false,
    style: {
      base: {},
      active: {}
    }
  }
}
