import React, { Component } from 'react';
import { Link } from 'react-router';
import ProductImage from '../../../ProductImage';
import { PRODUCTS_ENDPOINT } from '../../../util/urls';
import { Col, Row, Button } from 'react-bootstrap';
import { browserHistory } from 'react-router';
import BackToListButton from './BackToListButton';


class ProductDetail extends Component {

  render() {
    return (
      <div>
        <Row><Col xs={6} md={6}><ProductImage fileName={this.props.product.profileImage}/></Col></Row>
        <h2>Model: {this.props.product.model}</h2>
        <p>Product Id: {this.props.product.id}</p>
        <p>Price: { this.props.product.price }</p>
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

  handleEdit() {
    console.log('edit here');
  }

  render() {
    return (
      <div>
        <BackToListButton />
        {this.state.product && <ProductDetail product={this.state.product} />}
        <Button bsStyle="primary" onClick={this.handleEdit.bind(this)}>Edit</Button>
        <Button bsStyle="danger" onClick={this.handleDelete.bind(this)}>Delete</Button>
      </div>
    )
  }

}

export default ProductDetailContainer;

