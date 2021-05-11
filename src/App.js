import React, { Component } from 'react';
import PhoneBook from '../src/Views/PhoneBook';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import Container from './components/Container';
import { authOperations } from './redux/Auth';
import AppBar from './components/AppBar';
import LoginPage from './Views/LoginPage';
import RegisterPage from './Views/RegisterPage';
import HomePage from './Views/HomePage';

class App extends Component {
  componentDidMount() {
    this.props.onGetCurretnUser();
  }

//   render() {
//     return (
//       <div className="App">
//         <PhoneBook />
//       </div>
//     );
//   }
// }

// export default App;




render() {
  return (
    <Container>
      <AppBar />

      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/register" component={RegisterPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/contacts" component={PhoneBook} />
      </Switch>
    </Container>
  );
}
}

const mapDispatchToProps = {
onGetCurretnUser: authOperations.getCurrentUser,
};

export default connect(null, mapDispatchToProps)(App);