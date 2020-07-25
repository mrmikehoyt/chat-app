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
import NoteCreation from './pages/NoteCreation';
import Dashboard from './pages/Dashboard';
import Chat from './pages/Chat';
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
          <Switch>
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={SignUp} />
            <PrivateRoute exact path="/message" component={Chat} />
            <PrivateRoute exact path="/dashboard" component={Dashboard} />
            <PrivateRoute exact path="/notes" component={Notes} />
            <PrivateRoute exact path="/addnote" component={NoteCreation} />
            <PrivateRoute exact path="/" component={Dashboard} />
          </Switch>
          <Navigation />
        </Router>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
