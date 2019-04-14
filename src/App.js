import React, { Component } from 'react';
import TopMenu from './components/TopMenu'
import Home from './components/Home'
import Men from './components/Men'
import Cart from './components/Cart'
import Detail from './components/Detail'
import {Route, Switch} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className='main'>
        <TopMenu/>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/men' component={Men}/>
          <Route exact path='/cart' component={Cart}/>
          <Route exact path='/detail' component={Detail}/>
        </Switch>
        <footer className='footer'>
          <ul>
            <li>About</li>
            <li>Disclaimers</li>
            <li>Subscribe</li>
            <li>Contact us</li>
            <li>More</li>
          </ul>
        </footer>
      </div>
    )
  }    
}
export default App;