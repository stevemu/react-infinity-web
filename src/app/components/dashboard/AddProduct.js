import React, { Component } from 'react';
import { Button, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';

function FieldGroup({ id, label, help, ...props }) {
  return (
    <FormGroup controlId={id}>
      <ControlLabel>{label}</ControlLabel>
      <FormControl {...props} />
      {help && <HelpBlock>{help}</HelpBlock>}
    </FormGroup>
  );
}

class AddProduct extends Component {
  render() {
    return (
      <form action="">
        <h2>Add Product</h2>
        <FieldGroup
          type="text"
          label="Model"
          placeholder="model"
        />
        <FieldGroup
          type="text"
          label="Price"
          placeholder="price"
        />
        <Button bsStyle="primary" bsSize="large" block>Submit</Button>

      </form>
    );
  }
}

export default AddProduct;
