import React, { Component } from 'react';
import { Link } from 'react-router';

export class UserWidget extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    let user = this.props.user;
    return (
      <div className="panel panel-default">
      	<div className="panel-body">
      		<p><span class="text-muted">Name: {user && user.login}</p>
      		<p><span class="text-muted">Id: {user && user.id}</p>
      		<p><Link to="/repos">{user && user.repos_url}</Link>
      		<img src={user && user.avatar_url} alt="..." class="img-rounded">
      	</div>
      </div>
    );
  }
}
