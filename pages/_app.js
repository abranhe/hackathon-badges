import React from 'react';
import NextApp from 'next/app';
import { Provider } from 'react-redux';
import withRedux from '../store/with-redux';

class HackathonBadges extends NextApp {
  render() {
    const { Component, pageProps, reduxStore } = this.props;

    return (
      <Provider store={reduxStore}>
        <Component {...pageProps} />
      </Provider>
    );
  }
}

export default withRedux(HackathonBadges);
