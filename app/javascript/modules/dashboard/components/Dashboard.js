import CONSTANTS from '../../../constants/app-constant';
import React, { Component } from 'react';
import { Link } from 'react-router';
import Utility from '../../../mixins/basicUtils';
import GitHubService from '../../../services/github';
import UI from '../../../mixins/ui';

var Dashboard = React.createClass({
  mixins: [UI, GitHubService],

  componentDidMount() {
    this.getUsers()
      .then((result) => {})
      .catch((error) => this.notify('error', error.responseText));
  },

  render() {
    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title">GitHub Search</h3>
        </div>
        <div className="panel-body">
          <div className="col-lg-6">
            <div className="input-group">
              <input type="text" className="form-control" placeholder="Type username...">
              <span className="input-group-btn">
                <button className="btn btn-primary" type="button">Search</button>
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  },
});

export default Dashboard;
