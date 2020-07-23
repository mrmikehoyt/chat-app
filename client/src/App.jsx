import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ThemeProvider, CssBaseline } from '@material-ui/core';

import theme from './theme';
import store from './store';
import { loadUser } from './actions/authActions';

import PrivateRoute from './components/PrivateRoute';
import Login from './pages/Login';
import SignUp from './pages/Signup';
import Notes from './pages/Notes';
import Dashboard from './pages/Dashboard';
import Navigation from './components/Navigation';

function App() {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <div>
            <Switch>
              <Route exact path="/" component={Login} />
              <Route path="/login" component={Login} />
              <Route path="/signup" component={SignUp} />
              <PrivateRoute path="/dashboard" component={Dashboard} />
              <PrivateRoute path="/notes" component={Notes} />
            </Switch>
            <Navigation />
          </div>
        </Router>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
