import React, { Component } from 'react';

class Settings extends Component {
  render() {
    return (
      <div className="">
        <h2>Settings</h2>

        <h2>Change Password</h2>
        <div className="input-group">
          <span className="input-group-addon" id="basic-addon1">Old Password</span>
          <input type="text" className="form-control" placeholder="Old Password" aria-describedby="basic-addon1" />
        </div>
        <div className="input-group">
          <span className="input-group-addon" id="basic-addon1">New Password</span>
          <input type="text" className="form-control" placeholder="New Password" aria-describedby="basic-addon1" />
        </div>


        <h2>Add a User</h2>
        <div className="input-group">
          <span className="input-group-addon" id="basic-addon1">User name</span>
          <input type="text" className="form-control" placeholder="User name" aria-describedby="basic-addon1" />
        </div>
        <div className="input-group">
          <span className="input-group-addon" id="basic-addon1">Password</span>
          <input type="text" className="form-control" placeholder="Password" aria-describedby="basic-addon1" />
        </div>

      </div>
    );
  }
}

export default Settings;
