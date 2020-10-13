import React from 'react';
import './App.css';
import About from './about';
import Shop from './shop';
import Nav from './nav';
import coinDetail from './coindetail'

import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router> 
    <div className="App">
      <h3>Hello</h3>
      <Nav />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/shop" exact component={Shop} />
        <Route path="/shop/:id" component={coinDetail} />
        
      </Switch>
    </div>
    </Router>
  );
}

const Home = () => (
  <div>
    <h1>Home page</h1>
  </div>
);


export default App;
