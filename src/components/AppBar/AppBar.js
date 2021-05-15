import React from 'react';
import { connect } from 'react-redux';
import Navigation from '../Navigation/Navigation';
import UserMenu from '../UserMenu';
import AuthNav from '../AuthNav/AuthNav';
import { authSelectors } from '../../redux/Auth';
import PropTypes from 'prop-types';
import { Navbar, Nav } from 'react-bootstrap';

// const styles = {
//   header: {
//     display: 'flex',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     borderBottom: '1px solid #2A363B',
//   },
// };

const AppBar = ({ isAuthenticated }) => {
  return (
    <header>
      <Navbar bg="dark" variant="dark">
        <Nav className="mr-auto">
          <Navigation />
        </Nav>
        {isAuthenticated ? <UserMenu /> : <AuthNav />}
      </Navbar>
    </header>
  );
};

const mapStateToProps = state => ({
  isAuthenticated: authSelectors.getIsAuthenticated(state),
});

export default connect(mapStateToProps)(AppBar);

AppBar.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
};
