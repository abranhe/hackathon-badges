import React, { Component } from 'react';
import { connect } from 'react-redux';
import App from '../pages';

class Index extends Component {
  render() {
    return <App />;
  }
}

export default connect()(Index);
