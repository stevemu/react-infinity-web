import React, { Component } from 'react';
import { Link } from 'react-router';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';
import { browserHistory } from 'react-router';


class Dashboard extends Component {

  handleLogout() {
    let path = '/login/';
    browserHistory.push(path);
  }

  render() {
    return (
      <div>
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">Infinity Web Portal</a>
            </Navbar.Brand>
          </Navbar.Header>
          <Nav pullRight>
            <NavItem eventKey={1} href="#" onClick={this.handleLogout}>Log out</NavItem>
          </Nav>
        </Navbar>

        <div className="container-fluid">
          <div className="row">
            <div className="col-md-2 col-sm-3 sidebar">
              <ul className="nav nav-sidebar">
                <li><Link to="/dashboard/products">Products</Link></li>
                <li><Link to="/dashboard/add-product">Add Product</Link></li>
                <li><Link to="/dashboard/orders">Orders</Link></li>
                <li><Link to="/dashboard/settings">Settings</Link></li>
              </ul>
            </div>
            <div className="col-md-10 col-sm-9 main-area">
              { this.props.children }
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default Dashboard;
