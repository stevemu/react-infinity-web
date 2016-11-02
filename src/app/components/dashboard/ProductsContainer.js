import React, {Component} from 'react';
import {Link} from 'react-router';
import $ from 'jquery';
import ProductImage from '../../ProductImage';
import { PRODUCTS_ENDPOINT } from '../../util/urls';

class ProductsContainer extends Component {

  constructor() {
    super();
    this.state = {
      products: []
    };
  }

  componentDidMount() {
    $.ajax({
      url: `${PRODUCTS_ENDPOINT}`,
      dataType: 'json',
      success: function (data) {
        this.setState({
          products: data
        });
      }.bind(this),
      error: function (err) {
        console.log('error: ', err);
      }.bind(this)
    });
  }

  render() {
    return <Products products={this.state.products} />
  }

}


class Products extends Component {

  get productNodes() {
    return this.props.products.map((product) => {
      return (
        <div key={product.id} className="col-xs-6 col-sm-3 product-profile">
          <ProductImage className="img-responsive product-img" fileName={product.profileImage}/>
          <h4><Link to={`/dashboard/products/${product.id}`}>{ product.model }</Link></h4>
          <span className="text-muted">Price: { product.price }</span>
        </div>
      )
    });
  }

  render() {
    return (
      <div>
        <h3>Product List 11111123123</h3>
        <div className="row">
          {this.productNodes}
        </div>
      </div>
    );
  }
}

Products.propTypes = {
  products: React.PropTypes.array
};

export default ProductsContainer;
