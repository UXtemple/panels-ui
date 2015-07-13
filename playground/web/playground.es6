import { Panel, Panels } from '../../index';
import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
  <Panels>
    <Panel uri='/'>
      <div>panel 1</div>
      <div>this is a block</div>
    </Panel>
    <Panel uri='/2'>
      <div>panel 2</div>
      <div>this is another block</div>
    </Panel>
  </Panels>,
  document.getElementById('playground-container')
);

window.Playground = {
  PanelsUi: { Panel, Panels }
};

console.log('Welcome to panels-ui playground.');
console.log('https://ui.usepanels.com');
console.log('Playground module', Playground);
