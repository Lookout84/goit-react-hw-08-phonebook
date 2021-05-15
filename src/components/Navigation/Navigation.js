import React from 'react';
import { Nav } from 'react-bootstrap';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { authSelectors } from '../../redux/Auth';

const Navigation = ({ isAuthenticated }) => (
  <Nav variant="pills" className="justify-content-start" activeKey="/home">
    <Nav.Item>
      <Nav.Link eventKey="1" as={NavLink} to="/" exact>
        Home Page
      </Nav.Link>
    </Nav.Item>

    {isAuthenticated && (
      <Nav.Item>
        <Nav.Link eventKey="2" as={NavLink} to="/contacts" exact>
          Contacts
        </Nav.Link>
      </Nav.Item>
    )}
  </Nav>
);

const mapStateToProps = state => ({
  isAuthenticated: authSelectors.getIsAuthenticated(state),
});

export default connect(mapStateToProps)(Navigation);
