require('./theme/default/stylesheets/all.sass');
import React from 'react';
import ReactDOM from 'react-dom';
import { useRouterHistory, Router } from 'react-router';
import { createHashHistory } from 'history';
import App from './App';
import DashboardRoutes from './javascript/modules/dashboard/routes';

const history = useRouterHistory(createHashHistory)({ queryKey: false });

const Root = React.createClass({
  render() {
    return (
      <div id='mainContainer' className='contain-fluid'>
        <Router>
          {DashboardRoutes}
        </Router>
      </div>
    );
  },
});

ReactDOM.render(<Root />, document.getElementById('app'));
