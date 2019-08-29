import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Layout extends Component {
  render() {
    return (
      <html>
        <head>
          <title>{this.props.title}</title>
          <link rel="stylesheet" href="style.css" />
        </head>
        <body>{this.props.children}</body>
      </html>
    );
  }
}

Layout.propTypes = {
  title: PropTypes.string
};

export default Layout;
