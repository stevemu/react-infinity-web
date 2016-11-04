import React, { Component } from 'react';
import { Link } from 'react-router';
import ProductImage from '../../ProductImage';
import { ORDERS_ENDPOINT } from '../../util/urls';
import { Col, Row, Button } from 'react-bootstrap';

class OrderDetailContainer extends Component {

  constructor() {
    super();
    this.state = {
      order: {}
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
    return <OrderDetail orderId={this.props.params.orderId} order={this.state.order} />
  }

}


class OrderDetail extends Component {

  render() {
    return (
      <div>
        <Link to="/dashboard/orders/">
          <Button className="back" bsStyle="primary" bsSize="small">Back to Order List</Button>
        </Link>

      </div>
    );
  }
}

OrderDetail.propTypes = {
  order: React.PropTypes.object,
  orderId: React.PropTypes.string
};

export default OrderDetailContainer;

