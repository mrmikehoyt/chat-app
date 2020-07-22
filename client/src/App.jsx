import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ThemeProvider, CssBaseline } from '@material-ui/core';

import theme from './theme';
import Login from './pages/Login';
import SignUp from './pages/Signup';
import Notes from './pages/Notes';
import Dashboard from './pages/Dashboard';
import Navigation from './components/Navigation';

export default function App() {
  return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <div>
            <Switch>
              <Route exact path="/" component={Login} />
              <Route path="/login" component={Login} />
              <Route path="/signup" component={SignUp} />
              <Route path="/dashboard" component={Dashboard} />
              <Route path="/notes" component={Notes} />
            </Switch>
            <Navigation />
          </div>
        </Router>
      </ThemeProvider>
  );
}
