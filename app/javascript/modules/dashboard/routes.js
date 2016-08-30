import DashboardWrapper from './components/DashboardWrapper';
import Dashboard from './components/Dashboard';
import React from 'react';
import { Route, IndexRoute } from 'react-router';

const DashboardRoutes = (
  <Route name='DashboardWrapper' path='/dashboard' component={DashboardWrapper}>
    <IndexRoute component={Dashboard} />
  </Route>
);

export default DashboardRoutes;
