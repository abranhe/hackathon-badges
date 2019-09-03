import React from 'react';
import { connect } from 'react-redux';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Header from '../components/header';
import Hackathons from '../components/hackathons';
import Footer from '../components/footer';
import types from '../store/types';

function App({ dispatch }) {
  const router = useRouter();
  const { q: query } = router.query;

  if (query) {
    dispatch({ type: types.SEARCHING, searchValue: query });
  }

  return (
    <div>
      <Head>
        <title>Hackathon Badges</title>
        <link href="./static/style.css" rel="stylesheet" />
        <link href="./static/github.css" rel="stylesheet" />
      </Head>
      <Header />
      <Hackathons />
      <Footer />
    </div>
  );
}

export default connect()(App);
