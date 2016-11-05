import React, { Component } from 'react';
import { Link } from 'react-router';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem, Col, Grid, Row} from 'react-bootstrap';
import { browserHistory } from 'react-router';

class InfinityTopNavBar extends Component {

  handleLogout() {
    let path = '/login/';
    browserHistory.push(path);
  }

  render() {
    return (
      <Navbar>

        <Navbar.Header>
          <Navbar.Brand>
            <a href="#">Infinity Web Portal</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>

        <Navbar.Collapse>
          <Nav pullRight>
            <NavItem eventKey={1} href="#" onClick={this.handleLogout}>Log out</NavItem>
          </Nav>
        </Navbar.Collapse>

      </Navbar>
    )
  }
}

class Dashboard extends Component {

  render() {
    return (
      <div>
        <InfinityTopNavBar/>
        <Grid>
          <Row>
            <Col md={3} xs={3}>
              <ul className="nav nav-sidebar">
                <li><Link to="/dashboard/products">Products</Link></li>
                <li><Link to="/dashboard/orders">Orders</Link></li>
                <li><Link to="/dashboard/settings">Settings</Link></li>
              </ul>
            </Col>
            <Col md={9} xs={9} >
              { this.props.children }
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Dashboard;
