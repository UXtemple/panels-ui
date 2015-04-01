import * as PanelsUi from '../'
window.PanelsUi = PanelsUi

import React from 'react'

let {blocks, Panel, Panels} = PanelsUi

let ActionBlock = blocks.ActionBlock
let ActionWithIconBlock = blocks.ActionWithIconBlock
let ImageBlock = blocks.ImageBlock
let SubtitleBlock = blocks.SubtitleBlock
let TextBlock = blocks.TextBlock
let TitleBlock = blocks.TitleBlock

const SHEEP = 'http://static.guim.co.uk/sys-images/Guardian/Pix/pictures/2014/4/11/1397210130748/Spring-Lamb.-Image-shot-2-011.jpg'

let panel1 = (
  <Panel uri='/'>
    <TitleBlock title='Knock yourself out...' style={{marginTop: 50}} />
    <SubtitleBlock subtitle='With some links...' style={{marginTop: 25}} />
    <ActionBlock href='http://UXtemple.com' title='UXtemple' style={{marginTop: 25, backgroundColor: '#F2F2F2', color: '#353535'}} />
    <ActionBlock href='http://usepanels.com' title='use panels' style={{marginTop: 25, borderBottom: '1px solid #F2F2F2', color: '#353535'}} />
    <ActionWithIconBlock href='/some-panel' title='This is a sheep' src={SHEEP} style={{marginTop: 25}}  />

    <SubtitleBlock subtitle='Or some text and images...' style={{marginTop: 50}} />
    <TextBlock style={{marginTop: 25}}>Use panels now :).</TextBlock>
    <ImageBlock src={SHEEP} style={{marginTop: 25}} />
    <TextBlock style={{marginTop: 25}}> Sheep not included. Unfortunately. :)</TextBlock>
  </Panel>
)

let panels = (
  <Panels>
    {panel1}
  </Panels>
)

React.render(
  panels,
  document.getElementById('playground-container')
)

console.log('Welcome to panels-ui playground.')
console.log('https://ui.usepanels.com')
console.log('PanelsUi module', PanelsUi)
