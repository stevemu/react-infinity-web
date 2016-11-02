import React, {Component} from 'react';
// import 'bootstrap-css';
import {browserHistory} from 'react-router';

class Login extends Component {

  handleLogin(e) {
    e.preventDefault();

    let path = '/dashboard/';
    browserHistory.push(path);

  }

  render() {
    return (
      <div className="container-fluid">
        <form onSubmit={this.handleLogin}>
          <h1>Infinity Web Portal Login</h1>
          <div className="input-group">
            <span className="input-group-addon">Username</span>
            <input type="text" className="form-control" placeholder="Username" aria-describedby="basic-addon1"/>
          </div>
          <div className="input-group">
            <span className="input-group-addon">Password</span>
            <input type="text" className="form-control" placeholder="Password" aria-describedby="basic-addon1"/>
          </div>
          <button type="submit" className="btn btn-default">Login</button>
        </form>
      </div>
    );
  }
}

export default Login;
