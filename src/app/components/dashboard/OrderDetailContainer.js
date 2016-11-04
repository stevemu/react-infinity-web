import React, { Component } from 'react';
import { Link } from 'react-router';
import ProductImage from '../../ProductImage';
import { ORDERS_ENDPOINT } from '../../util/urls';
import { Col, Row, Button } from 'react-bootstrap';
import { Panel } from 'react-bootstrap';

// a panel shows name, address, city, state and zip
class AddressPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      address: props.address
    };
  }

  render() {
    return (
      <Panel>
        <p>{this.state.address.name}</p>
        <p>{this.state.address.address}</p>
        <p>{this.state.address.city}, {this.props.address.state}</p>
        <p>{this.state.address.zip}</p>
      </Panel>
    )
  }
}

class OrderDetail extends Component {

  render() {
    return (
      <div>
        <Link to="/dashboard/orders/">
          <Button className="back" bsStyle="primary" bsSize="small">Back to Order List</Button>
        </Link>
        <p>Order Id: {this.props.order.id}</p>
        <p>Item Id: {this.props.order.itemId}</p>
        <p>Color: {this.props.order.color}</p>
        <p>Price: {this.props.order.price}</p>
        <p>Ship To: </p>
        <AddressPanel address={this.props.order.shipTo} />
        <p>Bill To: </p>
        <AddressPanel address={this.props.order.billTo} />

      </div>
    );
  }
}

OrderDetail.propTypes = {
  order: React.PropTypes.object,
  orderId: React.PropTypes.string
};

class OrderDetailContainer extends Component {

  constructor() {
    super();
    this.state = {
      order: null
    }
  }

  componentDidMount() {

    fetch(`${ORDERS_ENDPOINT}${this.props.params.orderId}`).then((res) => {
      return res.json();
    }).then((json) => {
      this.setState({
        order: json
      });
    }).catch((ex) => {
      console.log(ex);
    })

  }

  render() {
    return (
      <div>
        { this.state.order && <OrderDetail orderId={this.props.params.orderId} order={this.state.order} />}
      </div>
    )


  }

}

export default OrderDetailContainer;

