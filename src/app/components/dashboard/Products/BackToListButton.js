import React, { Component } from 'react';

import { Link } from 'react-router';
import { Button } from 'react-bootstrap';

const BackToListButton = () => {
  return (
    <Link to="/dashboard/products/">
      <Button className="back" bsStyle="primary" bsSize="small">Back to Product List</Button>
    </Link>
  )
};

export default BackToListButton;