import React, { Component } from 'react';
import ContactForm from '../components/ContactForm/ContactForm';
import Filter from '../components/Filter/Filter';
import ContactList from '../components/ContactList/ContactList';
import { connect } from 'react-redux';
import { operations, selectors } from '../redux/Phone';
import { Container, Row, Col, Spinner } from 'react-bootstrap';
// import Spinn from '../components/Spinner';

class PhoneBook extends Component {
  componentDidMount() {
    this.props.fetchContacts();
  }

  render() {
    return (
      <Container fluid="md">
        <Row className="mt-2">
          <Col>
            <ContactForm />
          </Col>
        </Row>
        <Row className="mt-5">
          <Col>
            <h2>Contacts</h2>
            <Filter />
            {this.props.isLoadingContacts && (
              <Spinner animation="border" size="sl" />
            )}
            <ContactList />
          </Col>
        </Row>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  isLoadingContacts: selectors.getLoading(state),
});

const mapDispatchToProps = dispatch => ({
  fetchContacts: () => dispatch(operations.fetchContacts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(PhoneBook);
