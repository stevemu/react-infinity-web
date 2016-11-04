import React, { Component } from 'react';
import { Button, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
import Dropzone from 'react-dropzone';
import request from 'superagent';
import { UPLOADS_ENDPOINT, UPLOADS_URL } from '../../util/urls';

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

  constructor(props) {
    super(props);
    this.state = {
      uploadedFileNewFilename: null
    }
  }

  handleImageUpload(image) {
    let upload = request.post(UPLOADS_ENDPOINT).field('productImage', image);
    upload.end((err, response) => {
      if (err) {
        console.error(err);
      }
      if (response.body.newFilename !== '') {
        this.setState({
          uploadedFileNewFilename: response.body.newFilename
        })
      }
      console.log(response.body.newFilename);
    })
  }

  onImageDrop(images) {
    this.handleImageUpload(images[0]);
  }

  productImagePreview() {
    return this.state.uploadedFileNewFilename != null ?
      <img className="img-responsive" src={`${UPLOADS_URL}${this.state.uploadedFileNewFilename}`} alt=""/>
      :
      <img />
  }

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
        <Dropzone
          multiple={false}
          accept="image/*"
          onDrop={this.onImageDrop.bind(this)}>
          <p>Drop the product image</p>
          {this.productImagePreview()}
        </Dropzone>
        <Button bsStyle="primary" bsSize="large" block>Submit</Button>
      </form>
    );
  }
}

export default AddProduct;
