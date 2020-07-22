import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

function PrivateRoute({ component, isAuthenticated, ...rest }) {
  const Component = component;
  return (
    <Route
      {...rest}
      render={(props) => (
        isAuthenticated
          ? <Component {...props} />
          : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
      )}
    />
  );
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  error: state.error,
});

export default connect(mapStateToProps, {})(PrivateRoute);
