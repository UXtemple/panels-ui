import ActionBlock from '../action';
import * as baseStyle from './style';
import ImageBlock from '../image';
import TextBlock from '../text';
import React from 'react';

export default class ActionWithIconBlock extends React.Component {
  render() {
    return (
      <ActionBlock href={this.props.href} style={{...baseStyle.action, ...this.props.style}}>
        <ImageBlock src={this.props.src} style={{...baseStyle.image}} />
        <TextBlock style={{...baseStyle.text}} text={this.props.title} />
      </ActionBlock>
    );
  }
}

ActionWithIconBlock.propTypes = {
  href: React.PropTypes.string.isRequired,
  title: React.PropTypes.string,
  style:  React.PropTypes.object
}
