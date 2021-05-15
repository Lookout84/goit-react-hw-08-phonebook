import React from 'react';
import { connect } from 'react-redux';
import { authSelectors, authOperations } from '../../redux/Auth';
import defaultAvatar from './default-avatar.png';
import { Button, Badge, Form } from 'react-bootstrap';

const UserMenu = ({ avatar, email, onLogout }) => (
  <div>
    <Form inline>
      <img src={avatar} alt="" width="32" />
      <Badge variant="dark">
        <span>{email}</span>
      </Badge>{' '}
      <Button variant="success" type="button" onClick={onLogout}>
        Logout
      </Button>{' '}
    </Form>
  </div>
);
const mapStateToProps = state => ({
  email: authSelectors.getUseremail(state),
  avatar: defaultAvatar,
});

const mapDispatchToProps = {
  onLogout: authOperations.logOut,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
