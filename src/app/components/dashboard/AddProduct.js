import React, { Component } from 'react';

class AddProduct extends Component {
  render() {
    return (
      <div className="">
        <h1>Add Product</h1>

        <h2>Basic Info</h2>
        <div className="input-group">
          <span className="input-group-addon" id="basic-addon1">Model: </span>
          <input type="text" className="form-control" placeholder="Model" aria-describedby="basic-addon1" />
        </div>
        <div className="input-group">
          <span className="input-group-addon" id="basic-addon1">Price: </span>
          <input type="text" className="form-control" placeholder="Price" aria-describedby="basic-addon1" />
        </div>

        <h2>Picture</h2>

      </div>
    );
  }
}

export default AddProduct;
