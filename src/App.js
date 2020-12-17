import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Projects from './components/pages/Projects';
import Contact from './components/pages/Contact';
import FrontEnd from './components/pages/FrontEnd';
import BackEnd from './components/pages/BackEnd';
import DevOps from './components/pages/DevOps';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/projects' component={Projects} />
        <Route path='/contact' component={Contact} />
        <Route path='/frontEnd' component={FrontEnd} />
        <Route path='/backEnd' component={BackEnd} />
        <Route path='/devOps' component={DevOps} />
      </Switch>
    </Router>
  );
}

export default App;
