import React, { Component, Suspense, lazy } from 'react';
// import PhoneBook from '../src/Views/PhoneBook';
import './App.css';
import { Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import Container from './components/Container';
import { authOperations } from './redux/Auth';
import AppBar from './components/AppBar/AppBar';
// import LoginPage from './Views/LoginPage';
// import RegisterPage from './Views/RegisterPage';
// import HomePage from './Views/HomePage';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';
import { Spinner } from 'react-bootstrap';

const HomePage = lazy(() =>
  import('./Views/HomePage' /* webpackChunkName: "home-page" */),
);

const PhoneBookPage = lazy(() =>
  import('./Views/PhoneBook' /* webpackChunkName: "phonebook-page" */),
);

const RegisterPage = lazy(() =>
  import('./Views/RegisterPage' /* webpackChunkName: "register-page" */),
);

const LoginPage = lazy(() =>
  import('./Views/LoginPage' /* webpackChunkName: "login-page" */),
);

class App extends Component {
  componentDidMount() {
    this.props.onGetCurrentUser();
  }

  render() {
    return (
      <Container>
        <AppBar />
        <Suspense fallback={<Spinner animation="border" size="sl" />}>
          <Switch>
            <PublicRoute exact path="/" component={HomePage} />
            <PrivateRoute
              path="/contacts"
              redirectTo="/login"
              component={PhoneBookPage}
            />
            <PublicRoute
              path="/register"
              restricted
              redirectTo="/contacts"
              component={RegisterPage}
            />
            <PublicRoute
              path="/login"
              restricted
              redirectTo="/contacts"
              component={LoginPage}
            />
          </Switch>
        </Suspense>
      </Container>
    );
  }
}

const mapDispatchToProps = {
  onGetCurrentUser: authOperations.getCurrentUser,
};

export default connect(null, mapDispatchToProps)(App);
