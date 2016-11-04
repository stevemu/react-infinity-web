import React, {Component} from 'react';
import {Link} from 'react-router';
import $ from 'jquery';
import ProductImage from '../../ProductImage';
import { PRODUCTS_ENDPOINT } from '../../util/urls';
import {Row, Col} from 'react-bootstrap';

class ProductsContainer extends Component {

  constructor() {
    super();
    this.state = {
      products: []
    };
  }

  componentDidMount() {

    fetch(PRODUCTS_ENDPOINT).then((res) => {
      return res.json();
    }).then((json) => {
      this.setState({
        products: json
      });
    }).catch((ex) => {
      console.log(ex);
    })

  }

  render() {
    return <Products products={this.state.products} />
  }

}


class Products extends Component {

  get productNodes() {
    return this.props.products.map((product) => {
      return (
        <Row key={product.id} className="product-row">
          <Col xs={4}><ProductImage fileName={product.profileImage}/></Col>
          <Col xs={8}>
            <h4><Link to={`/dashboard/products/${product.id}`}>{ product.model }</Link></h4>
            <span className="text-muted">Price: { product.price }</span>
          </Col>
        </Row>
      )
    });
  }

  render() {
    return (
      <div>
        <h3>Product List</h3>
        {this.productNodes}
      </div>
    );
  }
}

Products.propTypes = {
  products: React.PropTypes.array
};

export default ProductsContainer;
