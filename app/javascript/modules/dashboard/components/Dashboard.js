import UI_MESSAGES from '../../../constants/ui-message';
import React, { Component } from 'react';
import { Link } from 'react-router';
import Utility from '../../../mixins/basicUtils';
import GitHubService from '../../../services/github';
import UI from '../../../mixins/ui';
import UserWidget from './userWidget'
import PaginationTab from './paginationTab'

export class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { users: [], showSince: 1 };
    this.showUsers = this.showUsers.bind(this);
  }

  componentDidMount() {
    this.fetchGitUsers();
  }

  fetchGitUsers(showSince) {
    GitHubService.getUsers(showSince)
      .then((result) => {
        this.setState({
          users: result || [],
          showSince: this.getUpdatedShowSince(result)
        });
      })
      .catch((error) => UI.notify('error', UI_MESSAGE.users.error.fetch));
  }
  
  getUpdatedShowSince(result) {
    return result && result.length &&
      _.last(result) && _.last(result).id;
  }
  
  getNextBatch() {
    this.fetchGitUsers(this.state.showSince);
  }

  getPrevBatch() {
    var firstIdOfBatch = this.state.users && this.state.users[0] && this.state.users[0].id;
    var showSince = Number(firstIdOfBatch - GitHubService.getPerPageRecordCount());
    if(showSince) {
      this.fetchGitUsers(showSince);
    }
  }
  
  showUsers() {
    return this.state.users.map((user) => {
      return (<UserWidget user = {user} />);
    });
  }
  
  showPagination() {
    return (<PaginationTab nextAction={this.getNextBatch}
      prevAction={this.getPrevBatch} pageAction={this.getBatchNumber} />)
  }
  
  render() {
    return (
      <div className="panel panel-primary">
        <div className="panel-heading">
          <h3 className="panel-title">GitHub Users</h3>
        </div>
        <div className="panel-body">
          {this.showUsers()}
          {this.showPaginationTab()}
        </div>
      </div>
    );
  }
};
