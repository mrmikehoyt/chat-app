import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Notes from './pages/Notes';
import Navigation from './components/Navigation';

export default function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/notes" component={Notes} />
        </Switch>
        <Navigation />
      </div>
    </Router>
  );
}
