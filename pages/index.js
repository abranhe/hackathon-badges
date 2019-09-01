import React from 'react';
import { connect } from 'react-redux';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Header from '../components/header';
import Hackathons from '../components/hackathons';
import Footer from '../components/footer';

function App({ dispatch }) {
  const router = useRouter();
  const { q } = router.query;

  dispatch({ type: 'SEARCHING', searchValue: q });

  return (
    <div>
      <Head>
        <title>Hackathon Badges</title>
        <link href='./static/style.css' rel='stylesheet' />
        <link href='./static/github.css' rel='stylesheet' />
      </Head>
      <Header />
      <Hackathons />
      <Footer />
    </div>
  );
}

export default connect()(App);
