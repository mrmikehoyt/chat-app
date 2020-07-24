import React from 'react';
import { Route, Redirect } from 'react-router-dom';

function PrivateRoute({ component, isAuthenticated, ...rest }) {
  const Component = component;

  return (
    <Route
      {...rest}
      render={(...props) => {
        if (localStorage.getItem('token')) {
          return (<Component {...props} />);
        }

        return (<Redirect to={{ pathname: '/login', state: { from: props.location } }} />);
      }}
    />
  );
}

export default PrivateRoute;
