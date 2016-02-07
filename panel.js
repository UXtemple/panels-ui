import React from 'react';

const Panel = props => (
  <div className='panel' style={{...style, ...props.style}}>
    {props.children}
  </div>
);
export default Panel;

const style = {
  overflowY: 'auto'
};
