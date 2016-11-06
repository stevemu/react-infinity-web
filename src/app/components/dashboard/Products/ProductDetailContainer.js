import React, { Component } from 'react';
import { Link } from 'react-router';
import ProductImage from '../../../ProductImage';
import { PRODUCTS_ENDPOINT } from '../../../util/urls';
import { Col, Row, Button } from 'react-bootstrap';
import { browserHistory } from 'react-router';

class ProductDetailContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      product: {},
      productUrl: `${PRODUCTS_ENDPOINT}${props.params.productId}`
    }
  }

  fetchProducts() {
    fetch(this.state.productUrl).then((res) => {
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
    this.fetchProducts();
  }

  handleDelete() {
    fetch(this.state.productUrl, {
      method: 'DELETE'
    });
    browserHistory.push('/dashboard/products');
  }

  render() {
    return (
      <div>
        <Link to="/dashboard/products/">
          <Button className="back" bsStyle="primary" bsSize="small">Back to Product List</Button>
        </Link>
        <ProductDetail productId={this.props.params.productId} product={this.state.product} />
        <Button bsStyle="danger" onClick={this.handleDelete.bind(this)}>Delete</Button>
      </div>
    )
  }

}


class ProductDetail extends Component {

  render() {
    return (
      <div>

        <Row><Col xs={6} md={6}><ProductImage fileName={this.props.product.profileImage}/></Col></Row>
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

