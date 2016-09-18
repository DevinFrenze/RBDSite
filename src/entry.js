import React, {PropTypes} from 'react'
import {render} from 'react-dom'
import { Redirect, Router, Route, hashHistory } from 'react-router'
// import {About, Contact, Gallery, Home, Team} from './components';
import { About, Contact, Home, Team } from './components'
import { Nav } from './components'
import 'styles/main'

class App extends React.Component {
  render () {
    return (
      <div>
        <div className='landing'>
          <Nav />
          {this.props.children}
        </div>
      </div>
    )
  }
}

render(
  <Router history={hashHistory}>
    <Route path='' component={App}>
      <Route path='/' component={Home}/>
      <Route path='/about' component={About}/>
      <Route path='/team' component={Team}/>
      <Redirect from='*' to='/'/>
    </Route>
  </Router>
, document.getElementById('app'))
