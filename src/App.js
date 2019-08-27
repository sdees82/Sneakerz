import React from 'react';
import './App.css';

import Nav from './components/nav/nav.component'

import {Route, Switch} from 'react-router-dom'
import HomePage from './pages/homePage/homePage';
import DesignersCollection from './pages/designersCollection/designersCollection'
import BrandsCollection from './pages/brandsCollection/brandsCollection.jsx'

function App() {

  return (
    <div className="App">
      <Nav/>
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route exact path='/brands' component={BrandsCollection}/>
        <Route exact path='/designers' component={DesignersCollection}/>
      </Switch>
    </div>
  );
}

export default App;
