import UI from '../../../mixins/ui';
import Header from '../../commons/Header';
import Local from '../../../mixins/sessionUtils';
import React, {Component} from 'react';

var DashboardWrapper = React.createClass({
  mixins: [UI, Local],

  render() {
    return(<div>
      {this.props.children}
    </div>);
  },
});

export default DashboardWrapper;
