import React, { Component } from 'react';
import $ from 'jquery';
import { Link } from 'react-router';
import ProductImage from '../../ProductImage';
import { PRODUCTS_ENDPOINT } from '../../util/urls';

class ProductDetailContainer extends Component {

  constructor() {
    super();
    this.state = {
      product: {}
    }
  }

  componentDidMount() {
    $.ajax({
      url: `${PRODUCTS_ENDPOINT}${this.props.params.productId}`,
      dataType: 'json',
      success: function(data) {
        this.setState({
          product: data
        });
      }.bind(this),
      error: function(err) {
        console.log('error: ', err);
      }.bind(this)
    });
  }

  render() {
    return <ProductDetail productId={this.props.params.productId} product={this.state.product} />
  }

}


class ProductDetail extends Component {

  render() {
    return (
      <div>
        <Link className="btn btn-primary btn-lg" to="/dashboard/products/">Back</Link>
        <ProductImage className="product-img img-responsive" fileName={this.props.product.profileImage}/>
        <h2>Model: {this.props.product.model}</h2>
        <p>Product Id: {this.props.productId}</p>
        <p>Price: { this.props.product.price }</p>
      </div>
    );
  }
}

ProductDetail.propTypes = {
  product: React.PropTypes.object,
  productId: React.PropTypes.string
};

export default ProductDetailContainer;

