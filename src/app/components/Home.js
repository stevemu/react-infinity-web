import React, {Component} from 'react';
import { Link } from 'react-router';
import { browserHistory } from 'react-router';

class Home extends Component {

  componentDidMount() {
    // go to dashboard
    let path = '/dashboard/';
    browserHistory.push(path);

  }

  render() {
    return (
      <div className="">
        <p>Home page!</p>
        <ul>
          <li><Link to="/dashboard">Dashboard</Link></li>
          <li><Link to="/login">Login</Link></li>
        </ul>

      </div>
    );
  }
}

export default Home;
