import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import { ORDERS_ENDPOINT } from '../../util/urls';
import { Link } from 'react-router';

class Orders extends Component {

  constructor(props) {
    super(props);
  }

  getOrderRows() {
    return this.props.orders.map((order) => {
        return (
          <tr key={order.id}>
            <th><Link to={`/dashboard/orders/${order.id}`}>{order.id}</Link></th>
            <th>{order.name}</th>
            <th>{order.itemId}</th>
            <th>{order.color}</th>
            <th>{order.price}</th>
          </tr>
        )
      }
    )
  }

  render() {
    return (
      <div>
        <h1>Orders</h1>

        <table className="table">
          <thead>
          <tr>
            <th>Order #</th>
            <th>Customer Name</th>
            <th>Item Id</th>
            <th>Color</th>
            <th>Cost</th>
          </tr>
          </thead>
          <tbody>
          {this.getOrderRows()}
          </tbody>
        </table>

      </div>
    );
  }
}

class OrdersContainer extends Component {

  constructor() {
    super();
    this.state = {
      orders: []
    }
  }

  componentDidMount() {
    fetch(ORDERS_ENDPOINT).then((res) => {
      return res.json();
    }).then((json) => {
      this.setState({
        orders: json
      });
    }).catch((ex) => {
      console.log(ex);
    })
  }

  render() {
    return (
      <Orders orders={this.state.orders} />
    )
  }

}

export default OrdersContainer;
