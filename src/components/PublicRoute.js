import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';


import { authSelectors } from '../redux/Auth';

const PublicRoute = ({
  component: Component, 
  isAuthenticated,
  redirectTo,
  ...routeProps
}) => (
  <Route
    {...routeProps}
    render={props =>
      isAuthenticated && routeProps.restricted ? (
        <Redirect to={redirectTo} />
      ) : (
        <Component {...props} />
      )
    }
  />
);

const mapStateToProps = state => ({
  isAuthenticated: authSelectors.getIsAuthenticated(state),
});

export default connect(mapStateToProps)(PublicRoute);