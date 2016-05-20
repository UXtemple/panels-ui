import React from 'react';

const Panel = ({ children, style, ...props }) => (
  <div {...props} className='panel' style={{ overflowY: 'auto', ...style }}>
    {children}
  </div>
);
export default Panel;

const style = {
  overflowY: 'auto'
};
