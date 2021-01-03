//import logo from './logo.svg';
import React from 'react';
import './App.css';
import All from './All';
import Next from './Next';
import {Route, Switch} from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={All}/>
        <Route exact path="/next"  component={Next}/>
        </Switch>
    </div>
  );
}

export default App;
