import React, { Component } from 'react';
import { Table } from 'react-bootstrap';

class OrdersContainer extends Component {

  constructor() {
    super();
  }

  componentDidMount() {

  }

}

class Orders extends Component {
  render() {
    return (
      <div className="">
        <h1>Orders</h1>

        <table className="table">
          <thead>
          <tr>
            <th>Order #</th>
            <th>Customer Name</th>
            <th>Model</th>
            <th>Color</th>
            <th>Cost</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <th>1</th>
            <td>Qi Mu</td>
            <td>Evoke</td>
            <td>Black</td>
            <td>$5000</td>
          </tr>
          <tr>
            <th>2</th>
            <td>Osa</td>
            <td>Iyashi</td>
            <td>Black&Black</td>
            <td>$6000</td>
          </tr>
          </tbody>
        </table>

      </div>
    );
  }
}

export default Orders;
