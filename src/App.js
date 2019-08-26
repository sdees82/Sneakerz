import React from 'react';
import './App.css';

import Nav from './components/nav/nav.component'
import Svg from './components/svg/svg.component'

import {Route, Switch} from 'react-router-dom'
import HomePage from './pages/homepage/homepage';
import './pages/homepage/homepage';

const Brands = () => (
  <div className="Homepage">
    <h1>Brands Page</h1>
  </div>
  
)

const Designers = () => (
  <div className="Homepage">
  <h1>Designers Page</h1>
</div>
)

function App() {

  return (
    <div className="App">
      <Nav/>
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route exact path='/brands' component={Brands}/>
        <Route exact path='/designers' component={Designers}/>
      </Switch>
    </div>
  );
}

export default App;
