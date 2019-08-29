import React from 'react';
import './App.scss';

import Nav from './components/nav/nav.component';

import {Route, Switch} from 'react-router-dom';
import { AnimatedSwitch } from 'react-router-transition';

import HomePage from './pages/homePage/homePage';
import DesignersCollection from './pages/collection/designersCollection/designersCollection';
import BrandsCollection from './pages/collection/brandsCollection/brandsCollection';

import DesignersDetails from './pages/details/designerDetails/designersDetails';

// import Footer from './components/footer/footer.component';

function App() {

  return (
    <div className="App">
      <Nav/>
        <Switch>
        <AnimatedSwitch
      atEnter={{ opacity: 0 }}
      atLeave={{ opacity: 0 }}
      atActive={{ opacity: 1 }}
      className="switch-wrapper"
    >
          <Route exact path='/' component={HomePage}/>
          <Route exact path='/brands' component={BrandsCollection}/>
          <Route exact path='/designers' component={DesignersCollection}/>
          <Route exact path='/designers/:designerID' component={DesignersDetails}/>
          </AnimatedSwitch>
        </Switch>
    </div>
  );
}

export default App;
