import React from 'react'
import { render } from 'react-dom'
import App from './components/app'
import List from './components/list'
import Greeter from './components/greeter'
import Counter from './components/counter'



render(
<div>
  <Greeter name= 'Rahmona'/>
  <List items={['burger', 'burgerburger', 'burgerburgerburger']}/>
  <Counter/>
</div>, document.querySelector('main'))
