import React from 'react';
import './App.scss';

import Nav from './components/nav/index';
import Invoice from './components/invoice/index';
import Test from './components/test/index';
import Test2 from './components/test2/index';


function App() {
  return (
    <div className="App">
      <Nav/>
      <Invoice/>
      <Test/>
      <Test2/>
    </div>
  );
}

export default App;
