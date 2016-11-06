import React, { Component } from 'react';
import { Link } from 'react-router';
import ProductImage from '../../../ProductImage';
import { PRODUCTS_ENDPOINT } from '../../../util/urls';
import { Col, Row, Button } from 'react-bootstrap';
import { browserHistory } from 'react-router';
import BackToListButton from './BackToListButton';
import { RIEToggle, RIEInput, RIETextArea, RIENumber, RIETags, RIESelect } from 'riek'


class ProductDetail extends Component {

  constructor(props) {
    super(props);
    this.state = {
      product: props.product
    };
    this.onChange = this.onChange.bind(this);
  }

  onChange(newValObj) {
    var product = this.state.product;
    Object.assign(product, newValObj);
    this.setState({product: product});
    this.props.onChange(product);
  }

  render() {
    return (
      <div>
        <Row><Col xs={6} md={6}><ProductImage fileName={this.state.product.profileImage}/></Col></Row>
        <p>ID: {this.state.product.id}</p>

        <span>Model: </span>
        <RIEInput
          value={this.state.product.model}
          change={this.onChange}
          propName="model"
          validate={this.isStringAcceptable}
        /><br />

        <span>Price: $</span>
        <RIENumber
          value={this.state.product.price}
          change={this.onChange}
          propName="price"
        /><br />

      </div>
    );
  }
}

ProductDetail.propTypes = {
  product: React.PropTypes.object
};




class ProductDetailContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      product: null
    };
    this.productUrl = `${PRODUCTS_ENDPOINT}${props.params.id}`;
  }

  fetchProduct() {
    fetch(this.productUrl).then((res) => {
      return res.json();
    }).then((json) => {
      this.setState({
        product: json
      });
    }).catch((ex) => {
      console.log(ex);
    })
  }

  componentDidMount() {
    this.fetchProduct();
  }

  handleDelete() {
    fetch(this.productUrl, {
      method: 'DELETE'
    }).then((res)=> {
      browserHistory.push('/dashboard/products');
    });

  }

  handleChange(product) {
    fetch(this.productUrl, {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(product)
    }).then((res)=> {
      // console.log(res);
    });
  }

  render() {
    return (
      <div>
        <BackToListButton />
        {this.state.product && <ProductDetail product={this.state.product} onChange={this.handleChange.bind(this)} />}
        <Button bsStyle="danger" onClick={this.handleDelete.bind(this)}>Delete</Button>
      </div>
    )
  }

}

export default ProductDetailContainer;

