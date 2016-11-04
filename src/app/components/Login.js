import React, {Component} from 'react';
import {browserHistory} from 'react-router';
import FieldGroup from './FieldGroup';
import { Button } from 'react-bootstrap';

class Login extends Component {


  constructor() {
    super();
    this.state = {
      username: "",
      password: ""
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    let path = '/dashboard/';
    browserHistory.push(path);
  }

  onUsernameChange(e) {
    this.setState({
      username: e.target.value
    })
  }
  onPasswordChange(e) {
    this.setState({
      password: e.target.value
    })
  }

  render() {
    return (
    <form onSubmit={this.handleSubmit.bind(this)} className="login">
      <h2>Infinity Web Portal Login</h2>
      <FieldGroup
        type="text"
        label="Username"
        placeholder="Username"
        value={this.state.username}
        onChange={this.onUsernameChange.bind(this)}
      />
      <FieldGroup
        type="text"
        label="Password"
        placeholder="password"
        value={this.state.password}
        onChange={this.onPasswordChange.bind(this)}
      />
      <Button type="submit">
        Login
      </Button>
    </form>

    );
  }
}

export default Login;
