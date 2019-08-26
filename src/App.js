import React from 'react';
import './App.css';

import Nav from './components/nav/nav.component'
import Svg from './components/svg/svg.component'

function App() {

  return (
    <div className="App">
      <Nav/>
      <header className="App-header">
        <Svg/>
      </header>
    </div>
  );
}

export default App;
