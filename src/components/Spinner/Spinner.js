import React from 'react';
import Spinner from 'react-bootstrap/Spinner';

const Spinn = () => (
  <Spinner animation="grow" variant="dark">
    <span className="sr-only">Loading...</span>
  </Spinner>
);

export default Spinn;
