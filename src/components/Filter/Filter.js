import React from 'react';
import PropTypes from 'prop-types';
import { Form } from 'react-bootstrap';
import { connect } from 'react-redux';
import { actions, selectors } from '../../redux/Phone';

const Filter = ({ value, onChange }) => {
  return (
    <Form.Group controlId="formGroupName">
      <Form.Label>Find contacts by name</Form.Label>
      <Form.Control type="text" value={value} onChange={onChange} />
    </Form.Group>
  );
};

const mapStateToProps = state => ({
  value: selectors.getFilter(state),
});

const mapDispatchToProps = dispatch => ({
  onChange: e => dispatch(actions.filterContact(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
