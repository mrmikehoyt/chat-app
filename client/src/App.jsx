import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import SignUp from './pages/Signup';
import Notes from './pages/Notes';
import Dashboard from './pages/Dashboard';
import Navigation from './components/Navigation';

export default function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/notes" component={Notes} />
        </Switch>
        <Navigation />
      </div>
    </Router>
  );
}
