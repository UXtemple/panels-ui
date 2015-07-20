import { Panel, Panels } from '../../index';
import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
  <Panels>
    <Panel uri='/' style={{backgroundColor: 'fuchsia'}}>
      <div>panel 1</div>
      <div style={{height: 500}}>this is a block</div>
      <div style={{height: 500}}>this is a block</div>
      <div style={{height: 500}}>this is a block</div>
    </Panel>
    <Panel uri='/2' style={{backgroundColor: 'yellow'}}>
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
console.log('Playground module', window.Playground);
