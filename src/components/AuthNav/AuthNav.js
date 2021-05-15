import React from 'react';
import { Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const AuthNav = () => {
  return (
    <div>
      <Nav variant="pills" className="justify-content-end" activeKey="/auth">
        <Nav.Item>
          <Nav.Link eventKey="1" as={NavLink} to="/register" exact>
            Registration
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="2" as={NavLink} to="/login" exact>
            Login
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
};

export default AuthNav;
