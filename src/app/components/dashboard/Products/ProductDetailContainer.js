import React, { Component } from 'react';
import { Link } from 'react-router';
import ProductImage from '../../../ProductImage';
import { PRODUCTS_ENDPOINT } from '../../../util/urls';
import { Col, Row, Button } from 'react-bootstrap';

class ProductDetailContainer extends Component {

  constructor() {
    super();
    this.state = {
      product: {}
    }
  }

  componentDidMount() {

    fetch(`${PRODUCTS_ENDPOINT}${this.props.params.productId}`).then((res) => {
      return res.json();
    }).then((json) => {
      this.setState({
        product: json
      });
    }).catch((ex) => {
      console.log(ex);
    })


  }

  render() {
    return <ProductDetail productId={this.props.params.productId} product={this.state.product} />
  }

}


class ProductDetail extends Component {

  render() {
    return (
      <div>
        <Link to="/dashboard/products/">
          <Button className="back" bsStyle="primary" bsSize="small">Back to Product List</Button>
        </Link>
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

