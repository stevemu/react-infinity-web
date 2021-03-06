import React, { Component } from 'react';
import { Button, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
import Dropzone from 'react-dropzone';
import request from 'superagent';
import { UPLOADS_ENDPOINT, UPLOADS_URL, PRODUCTS_ENDPOINT } from '../../../util/urls';
import FieldGroup from '../../FieldGroup';
import {browserHistory} from 'react-router';
import BackToListButton from './BackToListButton';

class AddProduct extends Component {

  constructor(props) {
    super(props);
    this.state = {
      profileImage: "",
      model: "",
      price: 0
    }
  }

  onModelChange(e) {
    this.setState({
      model: e.target.value
    })
  }
  onPriceChange(e) {
    this.setState({
      price: e.target.value
    })
  }


  handleImageUpload(image) {
    let upload = request.post(UPLOADS_ENDPOINT).field('image', image);
    upload.end((err, response) => {
      if (err) {
        console.error(err);
      }
      if (response.body.newFilename !== '') {
        this.setState({
          profileImage: response.body.newFilename
        })
      }
    })
  }

  onImageDrop(images) {
    this.handleImageUpload(images[0]);
  }

  productImagePreview() {
    return this.state.profileImage != "" ?
      <img className="img-responsive" src={`${UPLOADS_URL}${this.state.profileImage}`} alt=""/>
      :
      <img />
  }

  handleSubmit(e) {
    e.preventDefault();
    const newProduct = this.state;
    newProduct.price = parseFloat(newProduct.price);
    fetch(PRODUCTS_ENDPOINT, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newProduct)
    }).then((res) => {
      // go back to product lists
      browserHistory.push("/dashboard/products");
    })
  }

  render() {
    return (
      <div>
        <BackToListButton />
        <form onSubmit={this.handleSubmit.bind(this)}>
          <h2>Add Product</h2>
          <FieldGroup
            id="model"
            type="text"
            label="Model"
            placeholder="model"
            value={this.state.model}
            onChange={this.onModelChange.bind(this)}
          />
          <FieldGroup
            type="text"
            label="Price"
            placeholder="price"
            value={this.state.price}
            onChange={this.onPriceChange.bind(this)}
          />
          <div className="bottom-margin">
            <Dropzone
              multiple={false}
              accept="image/*"
              onDrop={this.onImageDrop.bind(this)}>
              <p>Drop the product image</p>
              {this.productImagePreview()}
            </Dropzone>
          </div>
          <Button type="submit" bsStyle="primary">
            Submit
          </Button>
        </form>
      </div>

    );
  }
}

export default AddProduct;
