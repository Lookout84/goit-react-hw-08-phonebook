import React, { Component } from 'react';
import { connect } from 'react-redux';
import { authOperations } from '../redux/Auth';
import { Button, Form, Container, Row, Col } from 'react-bootstrap';

class RegisterPage extends Component {
  state = {
    name: '',
    email: '',
    password: '',
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onRegister(this.state);

    this.setState({ name: '', email: '', password: '' });
  };

  render() {
    const { name, email, password } = this.state;

    return (
      <div>
        <Container fluid="md">
          <Row>
            <Col></Col>
            <Col>
              <h1>Registration:</h1>
              <Form onSubmit={this.handleSubmit}>
                <Form.Group controlId="formBasicName">
                  <Form.Label>Yuor name</Form.Label>
                  <Form.Control
                    type="name"
                    placeholder="Enter name"
                    name="name"
                    value={name}
                    onChange={this.handleChange}
                  />
                </Form.Group>

                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    name="email"
                    value={email}
                    onChange={this.handleChange}
                  />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={password}
                    onChange={this.handleChange}
                  />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
            </Col>
            <Col></Col>
          </Row>
        </Container>
      </div>
    );
  }
}

const mapDispatchToProps = {
  onRegister: authOperations.register,
};

export default connect(null, mapDispatchToProps)(RegisterPage);
