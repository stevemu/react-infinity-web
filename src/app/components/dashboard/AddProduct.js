import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

// function FieldGroup({ id, label, help, ...props }) {
//   return (
//     <FormGroup controlId={id}>
//       <ControlLabel>{label}</ControlLabel>
//       <FormControl {...props} />
//       {help && <HelpBlock>{help}</HelpBlock>}
//     </FormGroup>
//   );
// }

class AddProduct extends Component {
  render() {
    return (
      <form action="">
        <h2>Add Product</h2>
        {/*<FieldGroup*/}
          {/*id="formControlsText"*/}
          {/*type="text"*/}
          {/*label="Text"*/}
          {/*placeholder="Enter text"*/}
        {/*/>*/}
      </form>
      // <div className="">
      //   <h1>Add Product</h1>
      //
      //   <div className="input-group">
      //     <span className="input-group-addon" id="basic-addon1">Model: </span>
      //     <input type="text" className="form-control" placeholder="Model" aria-describedby="basic-addon1" />
      //   </div>
      //   <div className="input-group">
      //     <span className="input-group-addon" id="basic-addon1">Price: </span>
      //     <input type="text" className="form-control" placeholder="Price" aria-describedby="basic-addon1" />
      //   </div>
      //
      //   <h2>Picture</h2>
      //   <Button bsStyle="primary" bsSize="large" block>Submit</Button>
      //
      // </div>
    );
  }
}

export default AddProduct;
